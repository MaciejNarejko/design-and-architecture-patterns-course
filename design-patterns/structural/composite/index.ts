import { Dish } from './Dish'
import { Category } from './Category'

// Create dishes
const spaghetti = new Dish('Spaghetti')
const pizza = new Dish('Pizza')
const burger = new Dish('Burger')
const fries = new Dish('French Fries')
const soup = new Dish('Tomato Soup')

// Create categories
const italianCategory = new Category('Italian')
italianCategory.add(spaghetti)
italianCategory.add(pizza)

const fastFoodCategory = new Category('Fast Food')
fastFoodCategory.add(burger)
fastFoodCategory.add(fries)

const starterCategory = new Category('Starters')
starterCategory.add(soup)

// Create the main menu and add categories
const mainMenu = new Category('Main Menu')
mainMenu.add(italianCategory)
mainMenu.add(fastFoodCategory)
mainMenu.add(starterCategory)

// Display the full menu
mainMenu.display()
