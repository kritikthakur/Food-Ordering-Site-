// Drinks menu data with images
const drinksMenu = [
  {
    name: 'Coffee',
    description: 'A rich and bold espresso-based coffee.',
    price: '$3.50',
    image: 'Lemonade.jpeg'
  },
  {
    name: 'Tea',
    description: 'A refreshing hot or iced tea.',
    price: '$2.00',
    image: 'tea.jpeg'
  },
  {
    name: 'Lemonade',
    description: 'A refreshing tangy lemonade.',
    price: '$2.50',
    image: 'Lemonade.jpeg'
  },
  {
    name: 'Special Drink',
    description: 'Our signature drink, only at our café!',
    price: '$4.00',
    image: 'specialdrink.jpeg' // Your uploaded image
  }
];

// Render drinks menu
function displayDrinksMenu() {
  const menuList = document.getElementById('drinks');
  if (!menuList) return;
  menuList.innerHTML = '';

  drinksMenu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/90?text=No+Image';">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">${item.price}</div>
    `;
    menuList.appendChild(menuItem);
  });
}

displayDrinksMenu();
