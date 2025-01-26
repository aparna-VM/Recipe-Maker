// Recipe data organized by categories
const keralaRecipes = {
    // BREAKFAST RECIPES
    'appam': {
        name: 'Appam',
        image: './images/appam.jpeg',
        description: 'Lacy, soft and fluffy hoppers',
        category: ['breakfast', 'vegetarian', 'traditional'],
        ingredients: [
            '2 cups raw rice',
            '1/2 cup grated coconut',
            '1/2 tsp active dry yeast',
            '2 tsp sugar',
            '1/2 cup warm water',
            'Salt to taste'
        ],
        instructions: [
            'Soak rice for 4-5 hours',
            'Grind rice with coconut to make smooth batter',
            'Mix yeast with warm water and sugar, let it foam',
            'Mix yeast mixture with rice batter',
            'Ferment for 6-8 hours',
            'Pour ladle full of batter in hot appam pan',
            'Swirl to create lacy edges',
            'Cover and cook until edges are crispy'
        ]
    },

    'puttu': {
        name: 'Puttu with Kadala Curry',
        image: './images/puttkada.jpeg',
        description: 'Steamed rice cake with black chickpea curry',
        category: ['breakfast', 'vegetarian', 'traditional'],
        ingredients: [
            'Rice flour',
            'Grated coconut',
            'Water',
            'Salt'
        ],
        instructions: [
            'Mix rice flour with water and salt',
            'Layer puttu mold with coconut and flour mixture',
            'Steam until cooked',
            'Serve hot with kadala curry'
        ]
    },

    'achappam': {
        name: 'Achappam',
        image: './images/achappam.jpeg',
        description: 'Traditional Kerala rose cookie',
        category: ['snacks', 'tea-time', 'traditional'],
        ingredients: [
            '2 cups raw rice',
            '1/2 cup grated coconut',
            '1/2 tsp active dry yeast',
            '2 tsp sugar',
            '1/2 cup warm water',
            'Salt to taste'
        ],
        instructions: [
            'Soak rice for 4-5 hours',
            'Grind rice with coconut to make smooth batter',
            'Mix yeast with warm water and sugar, let it foam',
            'Mix yeast mixture with rice batter',
            'Ferment for 6-8 hours',
            'Pour ladle full of batter in hot appam pan',
            'Swirl to create lacy edges',
            'Cover and cook until edges are crispy'
        ]
    },

    'beefu': {
        name: 'Kerala Beef Fry',
        image: './images/beefu.jpeg',
        description: 'Spicy beef fry Kerala style',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        ingredients: [
            'Beef',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Chili',
            'Cumin',
            'Turmeric',
            'Coriander',
            'Coconut oil'
        ],
        instructions: [
            'Cut beef into small pieces',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add beef and cook until browned',
            'Add tomatoes and chili',
            'Cook until beef is tender',
            'Add spices and cook for a few more minutes',
            'Serve hot with rice or bread'
        ]
    },

    'biri': {
        name: 'Biri Biryani',
        image: './images/biri.jpeg',
        description: 'Traditional Malabar biryani',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        ingredients: [
            'Chicken',
            'Basmati rice',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Chili',
            'Cumin',
            'Turmeric',
            'Coconut oil'
        ],
        instructions: [
            'Cook basmati rice',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add chicken and cook until browned',
            'Add tomatoes and chili',
            'Add spices and cook for a few more minutes',
            'Mix rice and chicken',
            'Cook until rice is tender'
        ]
    },

    'chakka': {
        name: 'Chakka Curry',
        image: './images/chakkacurry.jpeg',
        description: 'Jackfruit curry',
        category: ['lunch', 'vegetarian', 'traditional'],
        ingredients: [
            'Jackfruit',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Chili',
            'Coconut oil'
        ],
        instructions: [
            'Cut jackfruit into pieces',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add jackfruit and cook until tender',
            'Add tomatoes and chili',
            'Cook until jackfruit is tender'
        ]
    },

    'chemeen': {
        name: 'Chemeen Curry',
        image: './images/chemeen.jpeg',
        description: 'Kerala style prawn curry',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        ingredients: [
            'Prawns',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Coconut oil'
        ],
        instructions: [
            'Clean prawns',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add prawns and cook until tender',
            'Add tomatoes and cook until prawns are tender'
        ]
    },

    'chicken': {
        name: 'Kerala Chicken Curry',
        image: './images/chickenc.jpeg',
        description: 'Spicy Kerala style chicken curry',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        ingredients: [
            'Chicken',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Coconut oil'
        ],
        instructions: [
            'Cut chicken into pieces',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add chicken and cook until browned',
            'Add tomatoes and cook until chicken is tender'
        ]
    },

    'elay': {
        name: 'Ela Ada',
        image: './images/elay.jpeg',
        description: 'Sweet rice parcels in banana leaf',
        category: ['snacks', 'dessert', 'traditional'],
        ingredients: [
            'Rice',
            'Banana leaf',
            'Coconut',
            'Sugar',
            'Salt'
        ],
        instructions: [
            'Cook rice',
            'Mix coconut and sugar',
            'Place rice in banana leaf',
            'Add coconut mixture',
            'Roll up and tie with string',
            'Steam until cooked'
        ]
    },

    'erachi': {
        name: 'Erachi Curry',
        image: './images/erachi.jpeg',
        description: 'Traditional meat curry',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        ingredients: [
            'Meat',
            'Onion',
            'Tomato',
            'Garlic',
            'Ginger',
            'Coconut oil'
        ],
        instructions: [
            'Cut meat into pieces',
            'Sauté onion, garlic, and ginger in coconut oil',
            'Add meat and cook until browned',
            'Add tomatoes and cook until meat is tender'
        ]
    },

    'erachiputtu': {
        name: 'Erachi Puttu',
        image: './images/erachiputtu.jpeg',
        description: 'Steamed rice cake with meat',
        category: ['breakfast', 'non-vegetarian'],
        ingredients: [
            'Rice flour',
            'Meat',
            'Water',
            'Salt'
        ],
        instructions: [
            'Mix rice flour with water and salt',
            'Layer puttu mold with meat and flour mixture',
            'Steam until cooked',
            'Serve hot with erachi curry'
        ]
    },

    'ethaka': {
        name: 'Ethakka Appam',
        image: './images/ethaka.jpeg',
        description: 'Banana fritters',
        category: ['snacks', 'tea-time', 'vegetarian'],
        ingredients: [
            'Rice',
            'Banana',
            'Coconut',
            'Sugar',
            'Salt'
        ],
        instructions: [
            'Cook rice',
            'Mix coconut and sugar',
            'Place rice in banana',
            'Add coconut mixture',
            'Roll up and tie with string',
            'Steam until cooked'
        ]
    },

    'fishm': {
        name: 'Fish Molee',
        image: './images/fishm.jpeg',
        description: 'Kerala style fish molee in coconut milk',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        // ... add ingredients and instructions
    },

    'food': {
        name: 'Kerala Sadya',
        image: './images/sadhya.jpeg',
        description: 'Traditional Kerala feast served on banana leaf',
        category: ['lunch', 'vegetarian', 'traditional'],
        // ... add ingredients and instructions
    },

    'iceore': {
        name: 'Ice Cream Payasam',
        image: './images/pazham with ice.jpeg',
        description: 'Fusion dessert combining payasam with ice cream',
        category: ['dessert', 'fusion'],
        // ... add ingredients and instructions
    },

    'kadala': {
        name: 'Kadala Curry',
        image: './images/kadala.jpeg',
        description: 'Black chickpea curry',
        category: ['breakfast', 'vegetarian', 'traditional'],
        // ... add ingredients and instructions
    },

    'kakka': {
        name: 'Kakka Irachi',
        image: './images/kakka.jpeg',
        description: 'Spicy clam curry',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        // ... add ingredients and instructions
    },

    'karimee': {
        name: 'Karimeen Fry',
        image: './images/karimee.jpeg',
        description: 'Pearl spot fish fry',
        category: ['lunch', 'dinner', 'non-vegetarian'],
        // ... add ingredients and instructions
    }
};

// Display recipes function
function displayRecipes() {
    const container = document.getElementById('recipe-categories');
    if (!container) return;

    container.innerHTML = '';

    const categories = ['breakfast', 'lunch', 'dinner', 'snacks', 'dessert'];
    
    categories.forEach(category => {
        const recipes = Object.entries(keralaRecipes).filter(([_, recipe]) => 
            recipe.category.includes(category)
        );

        if (recipes.length > 0) {
            const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
            const categorySection = `
                <div class="category-section">
                    <h3 class="category-header">${categoryTitle}</h3>
                    <div class="recipe-row">
                        ${recipes.map(([key, recipe]) => `
                            <div class="recipe-card">
                                <div class="recipe-image-container">
                                    <img 
                                        src="${recipe.image}" 
                                        alt="${recipe.name}" 
                                        class="recipe-image"
                                        onerror="this.src='./images/default-recipe.jpg'"
                                    >
                                </div>
                                <div class="recipe-content" onclick="showRecipe('${key}')">
                                    <h3 class="recipe-title">${recipe.name}</h3>
                                    <p class="recipe-description">${recipe.description}</p>
                                    <div class="recipe-tags">
                                        ${recipe.category.map(tag => 
                                            `<span class="tag">${tag}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            container.innerHTML += categorySection;
        }
    });
}

// Show recipe details in modal
function showRecipe(recipeKey) {
    const recipe = keralaRecipes[recipeKey];
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">×</span>
            <div class="recipe-modal-header">
                <h2>${recipe.name}</h2>
                <p class="recipe-description">${recipe.description}</p>
            </div>
            
            <div class="recipe-modal-body">
                <div class="recipe-ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(ing => `
                            <li>
                                <span class="ingredient-bullet">•</span>
                                ${ing}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="recipe-instructions">
                    <h3>Instructions:</h3>
                    <ol>
                        ${recipe.instructions.map(step => `
                            <li>${step}</li>
                        `).join('')}
                    </ol>
                </div>

                <div class="recipe-tips">
                    <h3>Traditional Tips:</h3>
                    <p>Best served with ${recipe.category.includes('breakfast') ? 'hot tea or coffee' : 
                       recipe.category.includes('lunch') ? 'rice or chapati' : 
                       recipe.category.includes('snacks') ? 'evening tea' : 'traditional accompaniments'}.</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add these styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .recipe-modal-header h2 {
            color: #d65108;
            font-size: 2rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .recipe-modal-body {
            display: grid;
            gap: 2rem;
            margin-top: 2rem;
        }

        .recipe-ingredients, .recipe-instructions, .recipe-tips {
            background: #fff9f5;
            padding: 1.5rem;
            border-radius: 15px;
            border: 2px solid #d65108;
        }

        .recipe-ingredients h3, .recipe-instructions h3, .recipe-tips h3 {
            color: #d65108;
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .recipe-ingredients ul {
            list-style: none;
        }

        .recipe-ingredients li, .recipe-instructions li {
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.1rem;
        }

        .ingredient-bullet {
            color: #d65108;
            font-size: 1.2rem;
        }

        .recipe-tips {
            background: #fff3e0;
        }

        .recipe-tips p {
            font-size: 1.1rem;
            color: #666;
        }

        .recipe-modal-content {
            animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
            0% { transform: translateY(-20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }

        .close-modal:hover {
            background: #b54006;
            transform: scale(1.1);
            transition: all 0.3s ease;
        }
    `;

    document.head.appendChild(style);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const closeModal = () => {
        modal.classList.add('fade-out');
        setTimeout(() => {
            modal.remove();
            style.remove();
        }, 300);
    };
    
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const container = document.getElementById('recipe-categories');
    
    if (!container) return;

    if (searchTerm === '') {
        displayRecipes();
        return;
    }

    const filteredRecipes = Object.entries(keralaRecipes).filter(([_, recipe]) => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );

    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No recipes found</h3>
                <p>Try searching with different terms</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="recipe-row">
            ${filteredRecipes.map(([key, recipe]) => `
                <div class="recipe-card" onclick="showRecipe('${key}')">
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.name}</h3>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-tags">
                            ${recipe.category.map(tag => 
                                `<span class="tag">${tag}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        displayRecipes();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
    });
} else {
    displayRecipes();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}