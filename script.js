// JavaScript for dynamically adding menu items
document.addEventListener('DOMContentLoaded', function() {
    const dishes = [
        { name: 'Dish 1', description: 'Description of Dish 1', price: '$10' },
        { name: 'Dish 2', description: 'Description of Dish 2', price: '$12' },
        { name: 'Dish 3', description: 'Description of Dish 3', price: '$8' },
        { name: 'Dish 4', description: 'Description of Dish 4', price: '$15' },
        { name: 'Dish 5', description: 'Description of Dish 5', price: '$9' }
    ];

    const menuItems = document.getElementById('menuItems');

    dishes.forEach(dish => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('col-md-4');

        menuItem.innerHTML = `
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <h3 class="card-title">${dish.name}</h3>
                    <p class="card-text">${dish.description}</p>
                    <p class="card-text">${dish.price}</p>
                </div>
            </div>
        `;

        menuItems.appendChild(menuItem);
    });
});
