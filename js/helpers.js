// ==================== STYLES ====================

const cartCounterStyle = document.createElement('style');
cartCounterStyle.textContent = `
  #cart-count, #cart-count-mobile {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #4361ee;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
  }
  .cart-link {
    position: relative;
    display: inline-flex;
  }
`;
document.head.appendChild(cartCounterStyle);

const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1000;
    transform: translateX(150%);
    transition: transform 0.3s ease;
    max-width: 90%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .toast.show {
    transform: translateX(0);
  }
  .toast-success {
    background: #25D366;
  }
  .toast-error {
    background: #ff4a4a;
  }
  .toast-info {
    background: #4361ee;
  }
  .toast i {
    font-size: 1.2em;
  }
`;
document.head.appendChild(toastStyles);

// ==================== FONCTIONS DU PANIER ====================

/**
 * Récupère le panier depuis le localStorage
 * @returns {Array} Le panier actuel
 */
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

/**
 * Sauvegarde le panier dans le localStorage
 * @param {Array} cart - Le panier à sauvegarder
 */
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Met à jour le compteur d'articles dans le panier (version responsive)
 * @returns {number} Le nombre total d'articles dans le panier
 */
export function updateCartCount() {
  try {
    const cart = getCart();
    const countElements = document.querySelectorAll('#cart-count, #cart-count-mobile');
    
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    countElements.forEach(el => {
      if (el) { // Vérification de sécurité ajoutée
        el.textContent = totalItems;
        el.style.display = totalItems > 0 ? 'flex' : 'none';
      }
    });
    
    return totalItems;
  } catch (error) {
    console.error("Erreur de mise à jour du panier:", error);
    return 0;
  }
}

/**
 * Vérifie si un produit est déjà dans le panier
 * @param {string} productId - L'ID du produit à vérifier
 * @returns {boolean} True si le produit est déjà dans le panier
 */
export function isProductInCart(productId) {
  const cart = getCart();
  return cart.some(item => item.id === productId);
}

/**
 * Ajoute un produit au panier ou met à jour sa quantité
 * @param {Object} product - Le produit à ajouter
 * @param {number} quantity - La quantité à ajouter (défaut: 1)
 * @returns {boolean} True si l'opération a réussi
 */
export function addToCart(product, quantity = 1) {
  try {
    if (!product?.id) {
      showToast("Produit invalide", 'error');
      return false;
    }
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += quantity;
      showToast(`Quantité mise à jour pour "${product.title}"`, 'info');
    } else {
      const productToAdd = {
        ...product,
        quantity: quantity
      };
      cart.push(productToAdd);
      showToast(`"${product.title}" ajouté au panier`, 'success');
    }
    
    saveCart(cart);
    updateCartCount();
    return true;
  } catch (error) {
    console.error("Erreur d'ajout au panier:", error);
    showToast("Erreur lors de l'ajout au panier", 'error');
    return false;
  }
}

/**
 * Supprime un article du panier
 * @param {number} index - L'index de l'article à supprimer
 * @returns {boolean} True si la suppression a réussi
 */
export function removeFromCart(index) {
  try {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
      const [removedItem] = cart.splice(index, 1);
      saveCart(cart);
      updateCartCount();
      showToast(`"${removedItem.title}" supprimé`, 'success');
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erreur de suppression:", error);
    showToast("Erreur lors de la suppression", 'error');
    return false;
  }
}

/**
 * Vide complètement le panier
 * @returns {boolean} True si le panier a été vidé
 */
export function clearCart() {
  try {
    localStorage.removeItem('cart');
    updateCartCount();
    showToast("Panier vidé", 'success');
    return true;
  } catch (error) {
    console.error("Erreur de vidage du panier:", error);
    showToast("Erreur lors du vidage du panier", 'error');
    return false;
  }
}

// ==================== NOTIFICATIONS ====================

/**
 * Affiche une notification toast
 * @param {string} message - Le message à afficher
 * @param {string} type - Le type de notification (success, error, info)
 */
export function showToast(message, type = 'success') {
  // Supprime les toasts existants
  const existingToasts = document.querySelectorAll('.toast');
  existingToasts.forEach(toast => toast.remove());

  // Crée le nouveau toast
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  // Icône selon le type
  const icons = {
    success: 'fa-check-circle',
    error: 'fa-exclamation-circle',
    info: 'fa-info-circle'
  };

  toast.innerHTML = `
    <i class="fas ${icons[type] || icons.info}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  // Animation
  setTimeout(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }, 100);
}

// ==================== WHATSAPP ====================

/**
 * Envoie le panier via WhatsApp
 * @param {Object} data - Les données du panier {items, subtotal, fees, total} OU le tableau d'items directement
 * @param {string} phoneNumber - Le numéro de téléphone (défaut: 2250595762779)
 * @returns {boolean} True si l'opération a réussi
 */
export function sendWhatsAppMessage(data, phoneNumber = '2250595762779') {
  try {
    // Gestion des deux formats de paramètre (data complet ou juste items)
    const cartItems = data?.items || data;
    
    if (!cartItems?.length) {
      showToast("Votre panier est vide", 'error');
      return false;
    }
    
    let message = "Bonjour, je souhaite commander :\n\n";
    let subtotal = 0;
    let fees = 0;
    let processedProducts = new Set();
    
    cartItems.forEach(item => {
      const qty = item.quantity || 1;
      const itemTotal = (item.prixPromo || item.price) * qty;
      subtotal += itemTotal;
      
      message += `- ${item.title} (${(item.prixPromo || item.price).toLocaleString()} FCFA) x ${qty} = ${itemTotal.toLocaleString()} FCFA\n`;
      
      // Gestion des frais (uniquement pour la première occurrence)
      if (item.fees && item.fees > 0 && !processedProducts.has(item.id)) {
        const itemFees = item.fees;
        message += `  Frais: ${itemFees.toLocaleString()} FCFA\n`;
        fees += itemFees;
        processedProducts.add(item.id);
      }
    });
    
    // Calcul du total si non fourni
    const total = data.total || (subtotal + fees);
    
    message += `\nSous-total: ${subtotal.toLocaleString()} FCFA\n`;
    message += `Frais totaux: ${fees.toLocaleString()} FCFA\n`;
    message += `TOTAL: ${total.toLocaleString()} FCFA\n\nMerci !`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    return true;
  } catch (error) {
    console.error("Erreur WhatsApp:", error);
    showToast("Erreur lors de l'ouverture de WhatsApp", 'error');
    return false;
  }
}

/**
 * Affiche une confirmation de commande stylisée pour un produit unique
 * @param {Object} product - Le produit à commander
 * @param {string} phoneNumber - Le numéro WhatsApp (défaut: 2250595762779)
 * @returns {boolean} True si l'opération a réussi
 */
export function confirmSingleProductOrder(product, phoneNumber = '2250595762779') {
    try {
        if (!product) {
            showToast("Produit invalide", 'error');
            return false;
        }
        const prixAffiché = product.prixPromo || product.price;
        const total = prixAffiché + (product.fees || 0);
        
        // Création de la modal de confirmation
        const modalHTML = `
            <div class="confirmation-modal" id="single-product-modal">
                <div class="confirmation-content">
                    <h3>Confirmer votre commande</h3>
                    <div class="order-summary">
                        <div class="order-item">
                            <h4>${product.title}</h4>
                            <p>${product.prixPromo ?
                                `Prix promo: ${product.prixPromo.toLocaleString()} FCFA (au lieu de ${product.price.toLocaleString()} FCFA)` :
                                `Prix: ${product.price.toLocaleString()} FCFA`}</p>
                            ${product.fees && product.fees > 0 ?
                                `<p class="item-fees">Frais: ${product.fees.toLocaleString()} FCFA</p>` : ''}
                            <p class="item-total">Total: ${total.toLocaleString()} FCFA</p>
                        </div>
                    </div>
                    <div class="order-totals">
                        <div class="order-row total">
                            <span>Total à payer:</span>
                            <span>${total.toLocaleString()} FCFA</span>
                        </div>
                    </div>
                    <div class="confirmation-buttons">
                        <button class="btn btn-cancel" id="cancel-single-order">Annuler</button>
                        <button class="btn btn-confirm" id="confirm-single-order">Confirmer</button>
                    </div>
                </div>
            </div>
        `;
        
        // Styles pour la modal (similaires à ceux du panier)
        const style = document.createElement('style');
        style.textContent = `
            .confirmation-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }
            .confirmation-content {
                background: white;
                padding: 2rem;
                border-radius: 8px;
                width: 90%;
                max-width: 500px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            }
            .order-summary {
                max-height: 300px;
                overflow-y: auto;
                margin: 1rem 0;
                border-bottom: 1px solid #eee;
                padding-bottom: 1rem;
            }
            .order-item {
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid #f5f5f5;
            }
            .item-fees {
                color: #666;
                font-size: 0.9em;
                margin-top: 0.25rem;
            }
            .item-total {
                font-weight: bold;
                margin-top: 0.5rem;
                color: #4361ee;
            }
            .order-totals {
                margin: 1rem 0;
            }
            .order-row {
                display: flex;
                justify-content: space-between;
                margin: 0.5rem 0;
            }
            .order-row.total {
                font-weight: bold;
                font-size: 1.1rem;
                margin-top: 1rem;
                padding-top: 1rem;
                border-top: 2px solid #4361ee;
            }
            .confirmation-buttons {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .btn-cancel {
                background: #f5f5f5;
                color: #333;
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .btn-confirm {
                background: #25D366;
                color: white;
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Gestion des événements
        document.getElementById('cancel-single-order').addEventListener('click', () => {
            document.getElementById('single-product-modal').remove();
            style.remove();
        });
        
        document.getElementById('confirm-single-order').addEventListener('click', () => {
            const message = `Bonjour, je souhaite commander la formation suivante :
Formation: ${product.title}
${product.prixPromo ? `Prix original: ${product.price.toLocaleString()} FCFA\nPrix promo: ${product.prixPromo.toLocaleString()} FCFA` : `Prix: ${product.price.toLocaleString()} FCFA`}
Frais: ${(product.fees || 0).toLocaleString()} FCFA
Total: ${total.toLocaleString()} FCFA
Merci de me fournir les informations de paiement.`;
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            document.getElementById('single-product-modal').remove();
            style.remove();
        });
        
        return true;
    } catch (error) {
        console.error("Erreur de confirmation de commande:", error);
        showToast("Erreur lors de la confirmation", 'error');
        return false;
    }
}

// ==================== EXPORTS ====================

export default {
  getCart,
  saveCart,
  updateCartCount,
  isProductInCart,
  addToCart,
  removeFromCart,
  clearCart,
  showToast,
  sendWhatsAppMessage,
  confirmSingleProductOrder
};