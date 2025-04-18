const sandwichesMenu = [
    {
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese sandwich.',
      price: 3.00,
      image: 'grilled-cheese.jpg'
    },
    {
      name: 'Veggie Sandwich',
      description: 'Fresh veggies with hummus.',
      price: 3.50,
      image: 'veggie-sandwich.jpg'
    },
    {
      name: 'Chicken Sandwich',
      description: 'Grilled chicken with lettuce and mayo.',
      price: 4.00,
      image: 'chicken-sandwich.jpg'
    },
    {
      name: 'Club Sandwich',
      description: 'Triple layer sandwich with bacon and turkey.',
      price: 4.50,
      image: 'club-sandwich.jpg'
    }
  ];
  
  function renderBurgersMenu() {
    const menuList = document.getElementById('sandwiches');
    menuList.innerHTML = '';
  
    sandwichesMenu.forEach((item, index) => {
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
    const item = sandwichesMenu[index];
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
  