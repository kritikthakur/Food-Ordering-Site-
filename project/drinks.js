const burgersMenu = [
  {
    name: 'Coffee',
    description: 'A rich and bold espresso-based coffee.',
    price: 3.50,
    image: 'coffee.jpg'
  },
  {
    name: 'Tea',
    description: 'A refreshing hot or iced tea.',
    price: 2.00,
    image: 'tea.jpeg'
  },
  {
    name: 'Lemonade',
    description: 'A refreshing tangy lemonade.',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Special Drinks',
    description: 'Our signature drink, only at our café!',
    price: 4.00,
    image: 'specialdrink.jpeg'
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
