CREATE TABLE meals (
    meal_id INT AUTO_INCREMENT PRIMARY KEY,
    meal_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    meal_image VARCHAR(255),
    recipe_url VARCHAR(255)
);

CREATE TABLE ingredients (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_name VARCHAR(255) NOT NULL
);

CREATE TABLE meal_ingredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    meal_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meals(meal_id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

INSERT INTO meals (meal_name, category, meal_image, recipe_url)
VALUES 
('Grilled Chicken Salad', 'Non-Vegetarian', 'grilled_chicken_salad.jpg', 'https://example.com/grilled-chicken-salad'),
('Vegan Burger', 'Vegan', 'vegan_burger.jpg', 'https://example.com/vegan-burger');

INSERT INTO meal_ingredients (meal_id, ingredient_id)
VALUES 
(1, 1), -- Grilled Chicken Salad contains Chicken
(1, 2), -- Grilled Chicken Salad contains Lettuce
(1, 3), -- Grilled Chicken Salad contains Tomato
(2, 4), -- Vegan Burger contains Vegan Patty
(2, 5); -- Vegan Burger contains Burger Bun

INSERT INTO ingredients (ingredient_name) 
VALUES 
('Chicken'),
('Lettuce'),
('Tomato'),
('Vegan Patty'),
('Burger Bun');

INSERT INTO meal_ingredients (meal_id, ingredient_id)
VALUES 
(1, 1), -- Grilled Chicken Salad contains Chicken
(1, 2), -- Grilled Chicken Salad contains Lettuce
(1, 3), -- Grilled Chicken Salad contains Tomato
(2, 4), -- Vegan Burger contains Vegan Patty
(2, 5); -- Vegan Burger contains Burger Bun

INSERT INTO categories (category_name)
VALUES 
('Vegan'), 
('Non-Vegetarian'), 
('Dessert');

CREATE TABLE meals (    meal_id INT AUTO_INCREMENT PRIMARY KEY,    meal_name VARCHAR(255) NOT NULL,    category VARCHAR(100),    meal_image VARCHAR(255),    recipe_url VARCHAR(255));

