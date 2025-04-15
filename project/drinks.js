// Drinks menu data with images
const drinksMenu = [
    {
      name: 'Coffee',
      description: 'A rich and bold espresso-based coffee.',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
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
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
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
    menuList.innerHTML = '';
    drinksMenu.forEach(item => {
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
  displayDrinksMenu();
  