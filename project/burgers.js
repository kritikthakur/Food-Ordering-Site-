// burgers.js

const burgersMenu = [
  {
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and sauce.',
    price: 5.00,
    image: 'burger1.jpg'
  },
  {
    name: 'Chicken Burger',
    description: 'Grilled chicken breast with fresh veggies and mayo.',
    price: 4.50,
    image: 'burger2.jpg'
  },
  {
    name: 'Veggie Burger',
    description: 'Plant-based patty with lettuce, onion, tomato, and sauce.',
    price: 4.00,
    image: 'burger3.jpg'
  },
  {
    name: 'Double Beef Burger',
    description: 'Two beef patties with cheese, pickles, and special sauce.',
    price: 6.50,
    image: 'burger1.jpg'
  }
];

function renderBurgersMenu() {
  const menuList = document.getElementById('burgers');
  menuList.innerHTML = '';

  burgersMenu.forEach((item, index) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">$${item.price.toFixed(2)}</div>
      <button class="add-cart-btn" onclick="addToCart(${index})">Add to Cart</button>
    `;
    menuList.appendChild(menuItem);
  });
}

function addToCart(index) {
  const item = burgersMenu[index];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
}

document.addEventListener('DOMContentLoaded', renderBurgersMenu);
window.addToCart = addToCart;
