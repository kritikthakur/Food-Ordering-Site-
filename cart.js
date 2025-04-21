// cart.js
// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');

// Render cart items
function renderCart() {
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        cartList.innerHTML = '<p style="color:#ffcc00;font-size:18px;">Your cart is empty.</p>';
        cartTotal.textContent = '$0.00';
        checkoutBtn.disabled = true;
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });

    updateTotal();
    checkoutBtn.disabled = false;
}

// Remove item from cart
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }
}

// Update total price
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Checkout functionality
function checkoutCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    if (confirm('Proceed to checkout?')) {
        localStorage.removeItem('cart');
        cart = [];
        renderCart();
        alert('Thank you for your order! Your food is on the way!');
    }
}

// Initial render when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Make functions available globally
window.removeFromCart = removeFromCart;
window.checkoutCart = checkoutCart;
