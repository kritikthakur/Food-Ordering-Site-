// Menu Data
const menuData = {
    drinks: [
        { name: 'Coffee', description: 'A rich and bold espresso-based coffee.', price: '$3.50' },
        { name: 'Tea', description: 'A refreshing hot or iced tea.', price: '$2.00' },
        { name: 'Lemonade', description: 'A refreshing tangy lemonade.', price: '$2.50' },
    ],
    food: [
        { name: 'Burger', description: 'Flaky buttery croissant.', price: '$2.00' },
        { name: 'cheese Burger', description: 'Grilled sandwich with your choice of fillings.', price: '$5.00' },
        { name: 'Chicken Burger', description: 'Fresh bagel with cream cheese.', price: '$2.50' },
        { name: 'Ham Burger', description: 'Fresh bagel with cream cheese.', price: '$2.50' },
    ],
    desserts: [
        { name: 'Chocolate Cake', description: 'A decadent chocolate cake with icing.', price: '$3.00' },
        { name: 'Cheesecake', description: 'Rich and creamy cheesecake with berry topping.', price: '$3.50' },
        { name: 'Cookies', description: 'Freshly baked chocolate chip cookies.', price: '$1.50' },
    ],
};

// Function to create and display menu items dynamically
function displayMenu(category) {
    const menuList = document.getElementById(category);
    menuList.innerHTML = ''; // Clear previous content

    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${item.name} - ${item.price}</h3>
            <p>${item.description}</p>
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
