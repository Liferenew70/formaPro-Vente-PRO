// Fonctions utilitaires
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }, 100);
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    
    document.querySelectorAll('#cart-count, #cart-count-mobile').forEach(el => {
        el.textContent = totalItems;
    });
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function showOrderConfirmation(items) {
    let subtotal = 0;
    let fees = 0;
    let processedProducts = new Set();

    // Créer le contenu HTML du récapitulatif
    let orderDetails = items.map(item => {
        const quantity = item.quantity || 1;
        const itemTotal = (item.prixPromo || item.price) * quantity;
        subtotal += itemTotal;

        let feesHtml = '';
        if (item.fees && item.fees > 0 && !processedProducts.has(item.id)) {
            fees += item.fees;
            processedProducts.add(item.id);
            feesHtml = `<p class="fees">+ Frais: ${item.fees.toLocaleString()} FCFA</p>`;
        }

        return `
            <div class="order-item">
                <h4>${item.title}</h4>
                <p>${(item.prixPromo || item.price).toLocaleString()} FCFA × ${quantity} = ${itemTotal.toLocaleString()} FCFA</p>
                ${feesHtml}
            </div>
        `;
    }).join('');

    const total = subtotal + fees;

    // Créer le modal de confirmation
    const modalHtml = `
        <div class="confirmation-modal" id="confirmation-modal">
            <div class="confirmation-content">
                <h3><i class="fas fa-shopping-cart"></i> Récapitulatif de commande</h3>
                <div class="order-summary">
                    ${orderDetails}
                </div>
                <div class="order-totals">
                    <div class="summary-row">
                        <span>Sous-total:</span>
                        <span>${subtotal.toLocaleString()} FCFA</span>
                    </div>
                    <div class="summary-row">
                        <span>Frais:</span>
                        <span class="fees">${fees.toLocaleString()} FCFA</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span>${total.toLocaleString()} FCFA</span>
                    </div>
                </div>
                <div class="confirmation-buttons">
                    <button class="btn btn-cancel" id="cancel-order">
                        <i class="fas fa-times"></i> Annuler
                    </button>
                    <button class="btn btn-confirm" id="confirm-order">
                        <i class="fab fa-whatsapp"></i> Confirmer et payer
                    </button>
                </div>
            </div>
        </div>
    `;

    // Ajouter le modal à la page
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Ajouter le style pour le modal
    const style = document.createElement('style');
    style.textContent = `
        .confirmation-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fadeIn 0.3s;
        }
        
        .confirmation-content {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .confirmation-content h3 {
            margin-top: 0;
            color: #4361ee;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .order-summary {
            max-height: 50vh;
            overflow-y: auto;
            margin: 1rem 0;
            padding: 1rem 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
        
        .order-item {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #f5f5f5;
        }
        
        .order-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        
        .order-totals {
            margin: 1.5rem 0;
        }
        
        .summary-row {
            display: flex;
            justify-content: space-between;
            margin: 0.5rem 0;
        }
        
        .fees {
            color: #ff4a4a;
            font-weight: bold;
        }
        
        .summary-row.total {
            font-weight: bold;
            font-size: 1.2rem;
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
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .btn-confirm {
            background: #25D366;
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Gestion des boutons du modal
    document.getElementById('cancel-order').addEventListener('click', () => {
        document.getElementById('confirmation-modal').remove();
        style.remove();
    });

    document.getElementById('confirm-order').addEventListener('click', () => {
        const selectedItems = getCart().filter(item => !item.inactive);
        sendWhatsAppMessage(selectedItems);
        document.getElementById('confirmation-modal').remove();
        style.remove();
    });
}

function sendWhatsAppMessage(items) {
    let message = "Bonjour, je souhaite commander les formations suivantes :\n\n";
    let subtotal = 0;
    let fees = 0;
    let processedProducts = new Set();

    items.forEach(item => {
        const quantity = item.quantity || 1;
        const itemTotal = (item.prixPromo || item.price) * quantity;
        subtotal += itemTotal;

        message += `- ${item.title} (${quantity}x): ${itemTotal.toLocaleString()} FCFA\n`;

        // Ajouter les frais seulement pour la première occurrence de chaque produit
        if (item.fees && item.fees > 0 && !processedProducts.has(item.id)) {
            fees += item.fees;
            processedProducts.add(item.id);
            message += `  Frais: ${item.fees.toLocaleString()} FCFA\n`;
        }
    });

    const total = subtotal + fees;
    message += `\nSous-total: ${subtotal.toLocaleString()} FCFA`;
    if (fees > 0) {
        message += `\nFrais: ${fees.toLocaleString()} FCFA`;
    }
    message += `\nTotal: ${total.toLocaleString()} FCFA\n\nMerci de me fournir les informations de paiement.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2250595762779?text=${encodedMessage}`, '_blank');
}

// Fonction principale pour afficher le panier
function displayCart() {
    const cart = getCart();
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const feesElement = document.getElementById('fees');
    const totalElement = document.getElementById('total');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Votre panier est vide</p>
                <a href="index.html" class="btn btn-primary">
                    Explorer nos formations
                </a>
            </div>
        `;
        subtotalElement.textContent = '0 FCFA';
        feesElement.innerHTML = '0 FCFA';
        totalElement.textContent = '0 FCFA';
        return;
    }

    let html = '';
    let subtotal = 0;
    let totalFees = 0;
    let processedProducts = new Set();

    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = (item.prixPromo || item.price) * quantity;
        const itemFees = item.fees || 0;
        const isActive = !item.inactive;

        if (isActive) {
            subtotal += itemTotal;

            // Ajouter les frais seulement pour la première occurrence de chaque produit
            if (itemFees > 0 && !processedProducts.has(item.id)) {
                totalFees += itemFees;
                processedProducts.add(item.id);
            }
        }

        html += `
            <div class="cart-item ${isActive ? '' : 'inactive'}" data-id="${item.id}">
                <div class="item-select">
                    <input type="checkbox" class="checkbox-item" data-index="${index}" 
                           ${isActive ? 'checked' : ''}>
                </div>
                <img src="${item.image}" alt="${item.title}">
                <div class="item-info">
                    <h4>${item.title}</h4>
                    <p>${(item.prixPromo || item.price).toLocaleString()} FCFA</p>
                    <div class="quantity-controls">
                        <button class="btn-quantity minus" data-index="${index}">-</button>
                        <span class="quantity">${quantity}</span>
                        <button class="btn-quantity plus" data-index="${index}">+</button>
                    </div>
                    ${itemFees > 0 ? `
                    <p class="${isActive ? 'fees' : 'fees inactive'}">
                        Frais: ${itemFees.toLocaleString()} FCFA
                    </p>` : ''}
                </div>
                <button class="btn-remove" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    subtotalElement.textContent = `${subtotal.toLocaleString()} FCFA`;
    feesElement.innerHTML = totalFees > 0 ? 
        `<span class="fees">${totalFees.toLocaleString()} FCFA</span>` : 
        '0 FCFA';
    totalElement.textContent = `${(subtotal + totalFees).toLocaleString()} FCFA`;

    // Ajout des événements
    setupCartEventListeners();
}

// Configuration des événements du panier
function setupCartEventListeners() {
    // Boutons +/-
    document.querySelectorAll('.btn-quantity').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            const change = this.classList.contains('plus') ? 1 : -1;
            updateQuantity(index, change);
        });
    });

    // Boutons de suppression
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            confirmRemove(index);
        });
    });

    // Cases à cocher
    document.querySelectorAll('.checkbox-item').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = parseInt(this.dataset.index);
            const cart = getCart();
            cart[index].inactive = !this.checked;
            saveCart(cart);
            displayCart();
        });
    });

    // Bouton de commande
    document.getElementById('checkout-btn').addEventListener('click', function() {
        const selectedItems = getCart().filter(item => !item.inactive);
        
        if (selectedItems.length === 0) {
            showToast('Veuillez sélectionner au moins un article', 'error');
            return;
        }
        
        showOrderConfirmation(selectedItems);
    });

    // Bouton vider le panier
    document.getElementById('empty-cart-btn').addEventListener('click', function() {
        if (confirm("Êtes-vous sûr de vouloir vider complètement votre panier ?")) {
            clearCart();
            displayCart();
            showToast('Panier vidé', 'success');
        }
    });
}

// Fonctions globales
window.updateQuantity = function(index, change) {
    const cart = getCart();
    if (index >= cart.length) {
        showToast('Article introuvable dans le panier', 'error');
        return;
    }

    const newQuantity = (cart[index].quantity || 1) + change;
    if (newQuantity < 1) {
        showToast('La quantité ne peut pas être inférieure à 1', 'error');
        return;
    }

    cart[index].quantity = newQuantity;
    saveCart(cart);
    displayCart();
    showToast('Quantité mise à jour', 'success');
};

window.confirmRemove = function(index) {
    const cart = getCart();
    if (index >= cart.length) return;

    const itemName = cart[index].title;
    if (confirm(`Voulez-vous vraiment supprimer "${itemName}" de votre panier ?`)) {
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
        showToast(`"${itemName}" supprimé du panier`, 'success');
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le panier s'il n'existe pas
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    displayCart();
    updateCartCount();
});