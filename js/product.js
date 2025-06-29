import { PRODUCTS } from './app.js';
import { updateCartCount, showToast } from './helpers.js';

// Initialisation de la page produit
document.addEventListener('DOMContentLoaded', () => {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = PRODUCTS[productId];

    if (product) {
        displayProductDetails(product);
        setupAddToCartButton(product.id);
        updateCartCount();
    } else {
        document.querySelector('.product-info').innerHTML = `
            <div class="product-not-found">
                <h1>Produit non trouvé</h1>
                <p>La formation que vous recherchez n'existe pas ou a été déplacée.</p>
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-arrow-left"></i> Retour à l'accueil
                </a>
            </div>
        `;
    }
});

// Affiche les détails du produit
function displayProductDetails(product) {
    // Met à jour l'image du produit
    const productImage = document.getElementById('product-image');
    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.title;
    }

    // Met à jour le titre
    document.getElementById('product-title').textContent = product.title;

    // Met à jour le prix avec promotion si disponible
    const priceContainer = document.getElementById('product-price-container');
    if (priceContainer) {
        if (product.prixPromo && product.prixPromo < product.price) {
            const discountPercentage = Math.round(((product.price - product.prixPromo) / product.price) * 100);
            priceContainer.innerHTML = `
                <span class="original-price">${product.price.toLocaleString()} FCFA</span>
                <span class="current-price">${product.prixPromo.toLocaleString()} FCFA</span>
                <span class="discount-badge">-${discountPercentage}%</span>
            `;
        } else {
            priceContainer.innerHTML = `
                <span class="current-price">${product.price.toLocaleString()} FCFA</span>
            `;
        }
    }

    // Met à jour les autres informations
    document.getElementById('product-duration').textContent = product.duration;
    document.getElementById('product-instructor').textContent = product.instructor;
    document.getElementById('product-level').textContent = product.level;

    // Met à jour la description en ajoutant dynamiquement les frais
    const descriptionElement = document.getElementById('product-description');
    if (descriptionElement) {
        let descriptionHTML = product.fullDescription || `<p>${product.description}</p>`;
        
        // Ajoute les frais dynamiquement
        if (product.fees) {
            descriptionHTML += `
                <div class="fees-info">
                    <h3>Informations supplémentaires</h3>
                    <p><strong>Frais d'inscription :</strong> ${product.fees.toLocaleString()} FCFA</p>
                </div>
            `;
        }
        
        descriptionElement.innerHTML = descriptionHTML;
    }
}

// Configure le bouton "Ajouter au panier"
function setupAddToCartButton(productId) {
    const btn = document.querySelector('.btn-add-to-cart');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const product = PRODUCTS[productId];
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Vérifie si le produit existe déjà
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            // Ajoute la quantité au produit
            const productWithQuantity = {...product, quantity: 1};
            cart.push(productWithQuantity);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        showToast(`${product.title} ajouté au panier`, 'success');

        // Animation sur le bouton
        btn.classList.add('clicked');
        setTimeout(() => {
            btn.classList.remove('clicked');
        }, 300);
    });
}