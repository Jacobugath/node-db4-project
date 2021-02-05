
exports.seed = function(knex) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: 'Clam Chowder', recipe_instructions: 'add calms slowly'},
        {recipe_name: 'Sheephered Pie'},
        {recipe_name: 'Marshmellow'}
      ]);
    })
    .then(function () {
      return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_name: 'Clams', recipe_id: 1, ingredient_quantity: 1, quantity_measurement: 'pinch'},
      ]);
    })
    })
};
