const menuData = {
    drinks: [
        { name: 'Coffee', description: 'A rich espresso-based brew.', price: '$3.50' },
        { name: 'Tea', description: 'A refreshing selection of teas.', price: '$2.00' },
        { name: 'Lemonade', description: 'Freshly squeezed lemonade.', price: '$2.50' }
    ],
    food: [
        { name: 'Burger', description: 'Grilled beef with fresh toppings.', price: '$4.00' },
        { name: 'Cheese Burger', description: 'Beef with melted cheese.', price: '$5.00' },
        { name: 'Chicken Burger', description: 'Crispy chicken with mayo.', price: '$4.50' }
    ],
    desserts: [
        { name: 'Chocolate Cake', description: 'Rich, moist chocolate cake.', price: '$3.00' },
        { name: 'Cheesecake', description: 'Classic cheesecake with berries.', price: '$3.50' },
        { name: 'Cookies', description: 'Freshly baked cookies.', price: '$1.50' }
    ],
    sandwiches: [
        { name: 'Grilled Cheese', description: 'Classic melted cheese sandwich.', price: '$3.00' },
        { name: 'Veggie Sandwich', description: 'Healthy vegetables and hummus.', price: '$3.50' },
        { name: 'Chicken Sandwich', description: 'Grilled chicken with greens.', price: '$4.00' }
    ]
};

function toggleMenu(category) {
    const container = document.getElementById(category);
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
        container.innerHTML = menuData[category].map(item => `
            <div class="menu-item">
                <h3>${item.name} — ${item.price}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }
}
