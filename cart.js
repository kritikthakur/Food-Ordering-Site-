let cart = [
  {
    name: 'Tea',
    description: 'A refreshing hot or iced tea.',
    price: 2.00,
    image: 'tea.jpeg'
  },
  {
    name: 'Burger',
    description: 'Flaky buttery croissant.',
    price: 2.00,
    image: 'burger3.jpg' // Your uploaded image
  }
];

// Render cart items
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  if (cart.length === 0) {
      cartList.innerHTML = '<p style="color:#ffcc00;font-size:18px;">Your cart is empty.</p>';
      document.getElementById('cart-total').textContent = '$0.00';
      document.querySelector('.checkout-btn').disabled = true;
      return;
  }
  cart.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-details">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <span class="price">$${item.price.toFixed(2)}</span>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${idx})">Remove</button>
      `;
      cartList.appendChild(div);
  });
  updateTotal();
  document.querySelector('.checkout-btn').disabled = false;
}

// Remove item from cart
function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
}

// Update total price
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Checkout action
function checkoutCart() {
  if (cart.length === 0) return;
  alert('Thank you for your order!');
  cart = [];
  renderCart();
}

// Initial render
renderCart();
// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length; // Update count to match the number of items in the cart
}

// Call this function whenever the cart is updated (like adding or removing items)
function addToCart(category, name, description, price, image) {
  const cartItem = { name, description, price, image };
  cart.push(cartItem);
  renderCart(); // Refresh cart display
  updateCartCount(); // Update cart count
}

// Call the updateCartCount() function on initial load to ensure it reflects the current cart state
updateCartCount();

