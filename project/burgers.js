const burgersMenu = [
  {
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and sauce.',
    price: '$5.00',
    image: 'burger1.jpeg'
  },
  {
    name: 'Chicken Burger',
    description: 'Grilled chicken breast with fresh veggies and mayo.',
    price: '$4.50',
    image: 'burger2.jpeg'
  },
  {
    name: 'Veggie Burger',
    description: 'Plant-based patty with lettuce, onion, tomato, and sauce.',
    price: '$4.00',
    image: 'burger3.jpeg'
  },
  {
    name: 'Double Beef Burger',
    description: 'Two beef patties with cheese, pickles, and special sauce.',
    price: '$6.50',
    image: 'burger4.jpeg'
  }
];

function displayBurgersMenu() {
  const menuList = document.getElementById('burgers');
  menuList.innerHTML = '';
  burgersMenu.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="price">${item.price}</div>
    `;
    menuList.appendChild(menuItem);
  });
}
displayBurgersMenu();
