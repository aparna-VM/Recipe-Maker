const kidsRecipes = {
    'rainbow_sandwich': {
        name: 'Rainbow Sandwich',
        image: './images/rainbow-sandwich.jpg',
        description: 'Colorful and healthy sandwich with vegetables',
        category: ['lunch', 'snacks', 'vegetarian'],
        ingredients: [
            'Whole wheat bread slices',
            'Cucumber (green layer)',
            'Carrots (orange layer)',
            'Yellow bell pepper',
            'Tomato (red layer)',
            'Cheese slice',
            'Butter or mayonnaise',
            'Salt to taste'
        ],
        instructions: [
            'Butter the bread slices',
            'Thinly slice all vegetables',
            'Layer vegetables by color',
            'Add cheese slice',
            'Close sandwich and cut into fun shapes'
        ]
    },

    'smiley_dosa': {
        name: 'Smiley Face Dosa',
        image: './images/smiley-dosa.jpg',
        description: 'Crispy dosa decorated with a happy face',
        category: ['breakfast', 'fun-food', 'vegetarian'],
        ingredients: [
            'Dosa batter',
            'Carrots for smile',
            'Green peas for eyes',
            'Tomato sauce',
            'Oil or ghee'
        ],
        instructions: [
            'Make a round dosa',
            'Create a smiley face using vegetables',
            'Cook until crispy',
            'Serve with tomato sauce'
        ]
    },

    'fruit_train': {
        name: 'Fruit Train',
        image: './images/fruit-train.jpg',
        description: 'Fruits arranged like a train - makes eating fruits fun!',
        category: ['snacks', 'dessert', 'healthy'],
        ingredients: [
            'Bananas for train cars',
            'Apple slices for wheels',
            'Grapes for passengers',
            'Strawberries for lights',
            'Other colorful fruits'
        ],
        instructions: [
            'Cut banana into sections',
            'Arrange like train compartments',
            'Add apple slice wheels',
            'Decorate with other fruits',
            'Serve immediately'
        ]
    },

    'butterfly_pasta': {
        name: 'Butterfly Pasta Salad',
        image: './images/butterfly-pasta.jpg',
        description: 'Colorful pasta salad shaped like butterflies',
        category: ['lunch', 'dinner', 'fun-food'],
        ingredients: [
            'Farfalle (butterfly) pasta',
            'Cherry tomatoes',
            'Sweet corn',
            'Cucumber',
            'Cheese cubes',
            'Olive oil',
            'Salt to taste'
        ],
        instructions: [
            'Cook pasta as per instructions',
            'Cut vegetables into small pieces',
            'Mix everything together',
            'Drizzle olive oil',
            'Serve colorfully'
        ]
    },

    'traffic_light_sandwich': {
        name: 'Traffic Light Sandwich',
        image: './images/traffic-sandwich.jpg',
        description: 'Three-layered sandwich with traffic light colors',
        category: ['lunch', 'snacks', 'educational'],
        ingredients: [
            'Bread slices',
            'Green lettuce/cucumber',
            'Yellow cheese',
            'Red tomato',
            'Mayonnaise',
            'Butter'
        ],
        instructions: [
            'Layer green vegetables first',
            'Add yellow cheese layer',
            'Top with red tomatoes',
            'Cut into traffic light shape',
            'Serve with fun facts about traffic safety'
        ]
    },

    'animal_pancakes': {
        name: 'Animal Face Pancakes',
        image: './images/animal-pancakes.jpg',
        description: 'Pancakes decorated as cute animal faces',
        category: ['breakfast', 'fun-food', 'sweet'],
        ingredients: [
            'Pancake batter',
            'Banana slices for ears',
            'Blueberries for eyes',
            'Strawberry for nose',
            'Chocolate sauce',
            'Honey or maple syrup'
        ],
        instructions: [
            'Make round pancakes',
            'Decorate with fruits to make faces',
            'Use chocolate sauce for details',
            'Serve with honey or syrup'
        ]
    },

    'pizza_faces': {
        name: 'Funny Face Mini Pizzas',
        image: './images/pizza-faces.jpg',
        description: 'Create silly faces on mini pizzas using colorful vegetables',
        category: ['lunch', 'dinner', 'fun-food'],
        ingredients: [
            'Mini pizza bases or bread rolls',
            'Pizza sauce',
            'Grated cheese',
            'Cherry tomatoes for nose',
            'Olive slices for eyes',
            'Bell peppers for mouth',
            'Corn for hair'
        ],
        instructions: [
            'Spread pizza sauce on bases',
            'Make funny faces with vegetables',
            'Sprinkle cheese around',
            'Bake until cheese melts',
            'Let cool and enjoy the silly faces!'
        ]
    },

    'rainbow_pasta': {
        name: 'Rainbow Pasta',
        image: './images/rainbow-pasta.jpg',
        description: 'Colorful pasta that changes color like magic!',
        category: ['lunch', 'dinner', 'magical-food'],
        ingredients: [
            'Cooked pasta',
            'Natural food colors',
            'Zip-lock bags',
            'Olive oil',
            'Salt to taste'
        ],
        instructions: [
            'Divide cooked pasta into portions',
            'Add different food colors to each bag',
            'Shake to color the pasta',
            'Mix all colored pasta together',
            'Add a little olive oil and serve'
        ]
    },

    'teddy_bear_toast': {
        name: 'Teddy Bear Toast',
        image: './images/teddy-toast.jpg',
        description: 'Breakfast toast that looks like a cute teddy bear',
        category: ['breakfast', 'fun-food', 'cute'],
        ingredients: [
            'Whole wheat bread',
            'Banana slices for ears',
            'Chocolate spread',
            'Blueberries for eyes',
            'Strawberry for nose'
        ],
        instructions: [
            'Toast the bread lightly',
            'Spread chocolate evenly',
            'Make teddy face with fruits',
            'Add details with chocolate spread',
            'Serve with a big smile!'
        ]
    },

    'veggie_cars': {
        name: 'Vegetable Race Cars',
        image: './images/veggie-cars.jpg',
        description: 'Vegetables transformed into fun racing cars',
        category: ['snacks', 'vegetables', 'creative'],
        ingredients: [
            'Cucumber for car body',
            'Carrot wheels',
            'Cherry tomatoes',
            'Cheese slices',
            'Toothpicks for assembly'
        ],
        instructions: [
            'Cut cucumber into car-sized pieces',
            'Make wheels from carrots',
            'Add details with cheese',
            'Use toothpicks to attach wheels',
            'Race your veggie cars to the finish line!'
        ]
    },

    'magic_wand_sandwiches': {
        name: 'Magic Wand Sandwiches',
        image: './images/magic-wands.jpg',
        description: 'Star-shaped sandwich wands with sparkly sprinkles',
        category: ['lunch', 'magical-food', 'party'],
        ingredients: [
            'Bread slices',
            'Favorite spreads',
            'Star cookie cutter',
            'Edible glitter',
            'Pretzel sticks for wands'
        ],
        instructions: [
            'Cut star shapes from sandwiches',
            'Insert pretzel stick handles',
            'Decorate with edible glitter',
            'Wave your wand and make a wish!',
            'Enjoy your magical lunch'
        ]
    },

    'ocean_jelly': {
        name: 'Ocean in a Cup',
        image: './images/ocean-jelly.jpg',
        description: 'Blue jelly with swimming gummy fish and waves',
        category: ['dessert', 'party', 'creative'],
        ingredients: [
            'Blue jelly powder',
            'Gummy fish',
            'Whipped cream for waves',
            'Clear cups',
            'Blue food coloring'
        ],
        instructions: [
            'Prepare blue jelly as directed',
            'Add gummy fish while setting',
            'Top with whipped cream waves',
            'Decorate with extra fish',
            'Dive into your ocean dessert!'
        ]
    },

    'monster_smoothie': {
        name: 'Friendly Monster Smoothie',
        image: './images/monster-smoothie.jpg',
        description: 'Green smoothie decorated as a friendly monster',
        category: ['breakfast', 'healthy', 'fun-drink'],
        ingredients: [
            'Spinach',
            'Banana',
            'Yogurt',
            'Honey',
            'Googly eye decorations',
            'Colorful straws'
        ],
        instructions: [
            'Blend spinach, banana, and yogurt',
            'Add honey to taste',
            'Pour into fun glasses',
            'Decorate with eyes and straws',
            'Watch your monster come alive!'
        ]
    },

    'rainbow_fruit_kebabs': {
        name: 'Rainbow Fruit Kebabs',
        image: './images/fruit-kebabs.jpg',
        description: 'Colorful fruit skewers in rainbow order',
        category: ['snacks', 'healthy', 'party'],
        ingredients: [
            'Strawberries (red)',
            'Orange segments',
            'Pineapple chunks (yellow)',
            'Green grapes',
            'Blueberries',
            'Purple grapes',
            'Wooden skewers'
        ],
        instructions: [
            'Wash and cut fruits',
            'Arrange in rainbow order',
            'Thread onto skewers',
            'Display standing in a cup',
            'Chase the rainbow!'
        ]
    }
};

// Display recipes function
function displayKidsRecipes() {
    const container = document.getElementById('recipe-categories');
    if (!container) return;

    container.innerHTML = '';

    const categories = ['breakfast', 'lunch', 'snacks', 'fun-food'];
    
    categories.forEach(category => {
        const recipes = Object.entries(kidsRecipes).filter(([_, recipe]) => 
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
    const recipe = kidsRecipes[recipeKey];
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">×</span>
            <div class="recipe-modal-header">
                <h2>🌟 ${recipe.name} 🌟</h2>
                <p class="recipe-description">${recipe.description}</p>
            </div>
            
            <div class="recipe-modal-body">
                <div class="recipe-ingredients">
                    <h3>🥕 What You Need:</h3>
                    <ul>
                        ${recipe.ingredients.map(ing => `
                            <li>
                                <span class="ingredient-bullet">🌈</span>
                                ${ing}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="recipe-instructions">
                    <h3>👩‍🍳 Let's Make It!</h3>
                    <ol>
                        ${recipe.instructions.map(step => `
                            <li>
                                <span class="step-number">✨</span>
                                ${step}
                            </li>
                        `).join('')}
                    </ol>
                </div>

                <div class="fun-fact">
                    <h3>🎯 Fun Tip:</h3>
                    <p>Get creative! You can add your own decorations to make it even more fun!</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add these styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .recipe-modal-header h2 {
            color: #FF4081;
            font-size: 2rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .recipe-modal-body {
            display: grid;
            gap: 2rem;
            margin-top: 2rem;
        }

        .recipe-ingredients, .recipe-instructions, .fun-fact {
            background: #FFF5F8;
            padding: 1.5rem;
            border-radius: 15px;
            border: 2px dashed #FF4081;
        }

        .recipe-ingredients h3, .recipe-instructions h3, .fun-fact h3 {
            color: #FF4081;
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

        .ingredient-bullet, .step-number {
            font-size: 1.2rem;
        }

        .fun-fact {
            background: #FFE0E9;
        }

        .fun-fact p {
            font-size: 1.1rem;
            color: #666;
        }

        .recipe-modal-content {
            animation: popIn 0.3s ease-out;
        }

        @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .close-modal:hover {
            background: #F50057;
            transform: rotate(90deg);
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

// Add this search function
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const container = document.getElementById('recipe-categories');
    
    if (!container) return;

    if (searchTerm === '') {
        displayKidsRecipes();
        return;
    }

    const filteredRecipes = Object.entries(kidsRecipes).filter(([_, recipe]) => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
        recipe.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );

    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>🔍 Oops! No recipes found</h3>
                <p>Try searching for something else!</p>
                <div class="no-results-emoji">🍽️</div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="search-results">
            <h3 class="category-header">🌟 Found Recipes 🌟</h3>
            <div class="recipe-grid">
                ${filteredRecipes.map(([key, recipe]) => `
                    <div class="recipe-card search-result">
                        <div class="recipe-content" onclick="showRecipe('${key}')">
                            <h3 class="recipe-title">
                                <span class="recipe-emoji">🍳</span>
                                ${recipe.name}
                            </h3>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="recipe-quick-info">
                                <div class="ingredients-preview">
                                    <h4>🥕 Main Ingredients:</h4>
                                    <p>${recipe.ingredients.slice(0, 3).join(', ')}...</p>
                                </div>
                            </div>
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
}

// Add these styles to your HTML file
const searchStyles = `
<style>
    .search-results {
        padding: 20px;
    }

    .recipe-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 1rem;
    }

    .search-result {
        width: 100%;
        transition: transform 0.3s ease;
    }

    .search-result:hover {
        transform: translateY(-5px);
    }

    .recipe-emoji {
        font-size: 1.5rem;
        margin-right: 8px;
    }

    .recipe-quick-info {
        background: #FFF5F8;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
    }

    .ingredients-preview h4 {
        color: #FF4081;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }

    .ingredients-preview p {
        color: #666;
        font-size: 0.9rem;
    }

    .no-results {
        text-align: center;
        padding: 3rem;
        color: #FF4081;
    }

    .no-results h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .no-results-emoji {
        font-size: 3rem;
        margin-top: 1rem;
        animation: bounce 1s infinite;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    @media (max-width: 768px) {
        .recipe-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
`;

// Add the styles to the document
document.head.insertAdjacentHTML('beforeend', searchStyles);

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        displayKidsRecipes();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
    });
} else {
    displayKidsRecipes();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
} 