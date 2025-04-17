const dessertsMenu = [
    {
      name: 'Chocolate Cake',
      description: 'A decadent chocolate cake with rich chocolate icing.',
      price: 3.00,
      image: 'brownie-sundae.jpg'
    },
    {
      name: 'Cheesecake',
      description: 'Rich and creamy cheesecake with a berry topping.',
      price: 3.50,
      image: 'cheesecake.jpeg'
    },
    {
      name: 'Cookies',
      description: 'Freshly baked chocolate chip cookies.',
      price: 1.50,
      image: 'cookies.jpeg'
    },
    {
      name: 'Brownie Sundae',
      description: 'Warm brownie with vanilla ice cream and chocolate sauce.',
      price: 4.00,
      image: 'brownie-sundae.jpg'
    }
  ];
  
  function renderDessertsMenu() {
    const menuList = document.getElementById('desserts');
    menuList.innerHTML = '';
    dessertsMenu.forEach((item, index) => {
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
    const item = dessertsMenu[index];
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
  
  document.addEventListener('DOMContentLoaded', renderDessertsMenu);
  window.addToCart = addToCart;
  