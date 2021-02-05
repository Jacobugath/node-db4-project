
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128)
          .notNullable();
        tbl.string('recipe_instructions')
      })
        

      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128)
           .notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes');
        tbl.integer('ingredient_quantity')
          .unsigned()
          .notNullable()
        tbl.string('quantity_measurement', 128)
          .notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
