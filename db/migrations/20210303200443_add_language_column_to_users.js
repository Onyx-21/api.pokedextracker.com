'use strict';

exports.up = function (Knex, Promise) {
  return Knex.schema.table('users', (table) => {
    table.string('language', 2);
  })
  .then(() => Knex.raw('UPDATE users SET "language" = \'en\''));
};

exports.down = function (Knex, Promise) {
  return Knex.schema.table('users', (table) => {
    table.dropColumn('language');
  });
};
