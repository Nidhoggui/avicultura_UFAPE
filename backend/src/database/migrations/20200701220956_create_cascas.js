
exports.up = function(knex) {
  return knex.schema.createTable('cascas', function(table){
    table.increments('id');
    table.decimal('peso').notNullable();
    table.integer('cor').notNullable();
    table.integer('espessura0').notNullable();
    table.integer('espessura1').notNullable();
    table.integer('espessura2').notNullable();
    table.integer('espessuraMedia').notNullable();

    table.string('ovo_id').notNullable();
    table.foreign('ovo_id').references('id').inTable('ovos');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cascas');
};
