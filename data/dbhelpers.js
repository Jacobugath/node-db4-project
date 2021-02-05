const db = require('./dbconfig');

const getRecipes = () =>{
    return db('recipes');
}

const getShoppingList = recipe_id =>{
    return db('ingredients')
        .where('recipe_id', recipe_id)
}
const getInstructions = recipe_id =>{
    return db('recipes')
        .select('recipe_instructions')
        .where('id', recipe_id)
}
