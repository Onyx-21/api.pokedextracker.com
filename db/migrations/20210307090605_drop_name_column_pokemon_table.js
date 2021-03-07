'use strict';

exports.up = function (Knex) {
  return Knex.schema.table('pokemon', (table) => {
    table.dropColumn('name');
  });
};

exports.down = function (Knex) {
  return Knex.schema.table('pokemon', (table) => {
    table.text('name');
  });
};
