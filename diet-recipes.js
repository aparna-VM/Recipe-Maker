const dietRecipes = {
    'quinoa_bowl': {
        name: 'Rainbow Quinoa Bowl',
        image: './images/quinoa-bowl.jpg',
        description: 'Protein-rich quinoa with colorful vegetables',
        category: ['lunch', 'dinner', 'high-protein', 'vegan'],
        calories: '320 kcal',
        protein: '12g',
        carbs: '45g',
        fat: '9g',
        ingredients: [
            '1 cup quinoa',
            'Mixed bell peppers',
            'Cherry tomatoes',
            'Cucumber',
            'Avocado',
            'Chickpeas',
            'Olive oil',
            'Lemon juice',
            'Fresh herbs'
        ],
        instructions: [
            'Cook quinoa according to package instructions',
            'Chop all vegetables into bite-sized pieces',
            'Drain and rinse chickpeas',
            'Combine all ingredients in a bowl',
            'Drizzle with olive oil and lemon juice',
            'Season with herbs and serve'
        ]
    },

    'overnight_oats': {
        name: 'Protein Overnight Oats',
        image: './images/overnight-oats.jpg',
        description: 'High-protein breakfast with oats and chia seeds',
        category: ['breakfast', 'high-protein', 'vegetarian'],
        calories: '280 kcal',
        protein: '15g',
        carbs: '35g',
        fat: '8g',
        ingredients: [
            'Rolled oats',
            'Greek yogurt',
            'Chia seeds',
            'Almond milk',
            'Protein powder',
            'Berries',
            'Honey (optional)',
            'Nuts for topping'
        ],
        instructions: [
            'Mix oats, yogurt, chia seeds, and almond milk',
            'Add protein powder and stir well',
            'Refrigerate overnight',
            'Top with berries and nuts before serving'
        ]
    },

    'cauliflower_rice': {
        name: 'Spiced Cauliflower Rice',
        image: './images/cauli-rice.jpg',
        description: 'Low-carb alternative to regular rice',
        category: ['lunch', 'dinner', 'low-carb', 'keto'],
        calories: '150 kcal',
        protein: '5g',
        carbs: '8g',
        fat: '6g',
        ingredients: [
            '1 cauliflower head',
            'Olive oil',
            'Garlic',
            'Turmeric',
            'Cumin',
            'Fresh herbs',
            'Salt and pepper'
        ],
        instructions: [
            'Pulse cauliflower in food processor until rice-sized',
            'Heat oil and sauté garlic',
            'Add cauliflower rice and spices',
            'Cook until tender but not mushy',
            'Season and serve'
        ]
    },

    'greek_salad': {
        name: 'Mediterranean Greek Salad',
        image: './images/greek-salad.jpg',
        description: 'Fresh and light Mediterranean style salad',
        category: ['lunch', 'low-carb', 'vegetarian'],
        calories: '220 kcal',
        protein: '8g',
        carbs: '12g',
        fat: '15g',
        ingredients: [
            'Cucumber',
            'Tomatoes',
            'Red onion',
            'Feta cheese',
            'Kalamata olives',
            'Extra virgin olive oil',
            'Oregano',
            'Red wine vinegar'
        ],
        instructions: [
            'Chop vegetables into chunks',
            'Combine in a large bowl',
            'Add crumbled feta and olives',
            'Dress with olive oil and vinegar',
            'Season with oregano and serve'
        ]
    },

    'salmon_bowl': {
        name: 'Grilled Salmon Power Bowl',
        image: './images/salmon-bowl.jpg',
        description: 'Omega-3 rich salmon with quinoa and vegetables',
        category: ['dinner', 'high-protein', 'omega-3'],
        calories: '420 kcal',
        protein: '35g',
        carbs: '30g',
        fat: '18g',
        ingredients: [
            'Salmon fillet',
            'Quinoa',
            'Broccoli',
            'Sweet potato',
            'Avocado',
            'Lemon',
            'Olive oil',
            'Herbs and spices'
        ],
        instructions: [
            'Grill salmon with lemon and herbs',
            'Cook quinoa and roast vegetables',
            'Arrange in bowl with sliced avocado',
            'Drizzle with olive oil and lemon',
            'Season to taste'
        ]
    },

    'smoothie_bowl': {
        name: 'Green Protein Smoothie Bowl',
        image: './images/smoothie-bowl.jpg',
        description: 'Nutrient-packed smoothie bowl with superfoods',
        category: ['breakfast', 'vegan', 'gluten-free'],
        calories: '290 kcal',
        protein: '16g',
        carbs: '42g',
        fat: '7g',
        ingredients: [
            'Spinach',
            'Banana',
            'Plant-based protein powder',
            'Almond milk',
            'Chia seeds',
            'Berries for topping',
            'Granola',
            'Hemp seeds'
        ],
        instructions: [
            'Blend spinach, banana, protein powder, and milk',
            'Pour into bowl',
            'Top with berries, granola, and seeds',
            'Serve immediately'
        ]
    }
};

// Display recipes function
function displayDietRecipes() {
    const container = document.getElementById('recipe-categories');
    if (!container) return;

    container.innerHTML = '';

    const categories = ['breakfast', 'lunch', 'dinner', 'high-protein', 'low-carb'];
    
    categories.forEach(category => {
        const recipes = Object.entries(dietRecipes).filter(([_, recipe]) => 
            recipe.category.includes(category)
        );

        if (recipes.length > 0) {
            const categoryTitle = category.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            const categorySection = `
                <div class="category-section">
                    <h3 class="category-header">${categoryTitle}</h3>
                    <div class="recipe-row">
                        ${recipes.map(([key, recipe]) => `
                            <div class="recipe-card">
                                <div class="recipe-content" onclick="showRecipe('${key}')">
                                    <h3 class="recipe-title">${recipe.name}</h3>
                                    <p class="recipe-description">${recipe.description}</p>
                                    <div class="nutrition-info">
                                        Calories: ${recipe.calories} | Protein: ${recipe.protein}
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
            container.innerHTML += categorySection;
        }
    });
}

// Show recipe details in modal
function showRecipe(recipeKey) {
    const recipe = dietRecipes[recipeKey];
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="recipe-modal-content">
            <span class="close-modal">×</span>
            <div class="recipe-modal-header">
                <h2>${recipe.name}</h2>
                <p class="recipe-description">${recipe.description}</p>
                <div class="nutrition-info">
                    <p>Calories: ${recipe.calories} | Protein: ${recipe.protein} | Carbs: ${recipe.carbs} | Fat: ${recipe.fat}</p>
                </div>
            </div>
            
            <div class="recipe-modal-body">
                <div class="recipe-ingredients">
                    <h3>Ingredients</h3>
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
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(step => `
                            <li>${step}</li>
                        `).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const closeModal = () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
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
        displayDietRecipes();
        return;
    }

    const filteredRecipes = Object.entries(dietRecipes).filter(([_, recipe]) => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
        recipe.category.some(cat => cat.toLowerCase().includes(searchTerm))
    );

    if (filteredRecipes.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>🔍 No recipes found</h3>
                <p>Try searching for different ingredients or categories like 'protein', 'vegan', 'low-carb'</p>
                <div class="no-results-emoji">🥗</div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="search-results">
            <h3 class="category-header">Search Results</h3>
            <div class="recipe-grid">
                ${filteredRecipes.map(([key, recipe]) => `
                    <div class="recipe-card search-result">
                        <div class="recipe-content" onclick="showRecipe('${key}')">
                            <h3 class="recipe-title">
                                <span class="recipe-icon">🥗</span>
                                ${recipe.name}
                            </h3>
                            <p class="recipe-description">${recipe.description}</p>
                            <div class="nutrition-info">
                                <p>Calories: ${recipe.calories} | Protein: ${recipe.protein}</p>
                            </div>
                            <div class="recipe-quick-info">
                                <div class="ingredients-preview">
                                    <h4>Main Ingredients:</h4>
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

// Add these styles to the existing styles
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

    .recipe-icon {
        font-size: 1.2rem;
        margin-right: 8px;
    }

    .recipe-quick-info {
        background: #E8F5E9;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem 0;
    }

    .ingredients-preview h4 {
        color: #4CAF50;
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
        color: #4CAF50;
    }

    .no-results h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .no-results p {
        color: #666;
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
        displayDietRecipes();
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
    });
} else {
    displayDietRecipes();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
} 