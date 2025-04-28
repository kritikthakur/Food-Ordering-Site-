// Menu Data
const menuData = {
    drinks: [
        { name: 'Coffee', description: 'A rich and bold espresso-based coffee.', price: 3.50 },
        { name: 'Tea', description: 'A refreshing hot or iced tea.', price: 2.00 },
        { name: 'Lemonade', description: 'A refreshing tangy lemonade.', price: 2.50 },
    ],
    burger: [
        { name: 'Burger', description: 'Juicy grilled beef patty with lettuce and tomato.', price: 4.00 },
        { name: 'Cheese Burger', description: 'Grilled burger with melted cheese.', price: 5.00 },
        { name: 'Chicken Burger', description: 'Crispy chicken burger with mayo.', price: 4.50 },
        { name: 'Ham Burger', description: 'Grilled ham with onions and cheese.', price: 4.20 },
    ],
    desserts: [
        { name: 'Chocolate Cake', description: 'A decadent chocolate cake with icing.', price: 3.00 },
        { name: 'Cheesecake', description: 'Rich and creamy cheesecake with berry topping.', price: 3.50 },
        { name: 'Cookies', description: 'Freshly baked chocolate chip cookies.', price: 1.50 },
    ],
    sandwiches: [
        { name: 'Grilled Cheese', description: 'Classic grilled cheese sandwich.', price: 3.00 },
        { name: 'Veggie Sandwich', description: 'Fresh veggies with hummus.', price: 3.50 },
        { name: 'Chicken Sandwich', description: 'Grilled chicken with lettuce and mayo.', price: 4.00 },
        { name: 'Club Sandwich', description: 'Triple layer sandwich with bacon and turkey.', price: 4.50 }
    ]
};

// Function to create and display menu items dynamically
function displayMenu(category) {
    const menuList = document.getElementById(category);
    menuList.innerHTML = ''; // Clear previous content

    menuData[category].forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
    <h3>${item.name} - $${item.price.toFixed(2)}</h3>
    <p>${item.description}</p>
    <button class="add-to-cart-btn" onclick="addToCart('${category}', ${index})">Add to Cart</button>
`;

        menuList.appendChild(menuItem);
    });
}

// Function to toggle the visibility of the menu
function toggleMenu(category) {
    const menuList = document.getElementById(category);
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
        displayMenu(category); // Display the items when the menu is shown
    }
}

// Cart Array
let cart = [];

// Function to add items to the cart
function addToCart(category, index) {
    const item = menuData[category][index];
    cart.push(item);
    updateCartDisplay();
}

// Function to update cart display and total
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear current cart display

    cart.forEach((item, idx) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${idx})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    updateTotal();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Function to update the total price of items in the cart
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
}
