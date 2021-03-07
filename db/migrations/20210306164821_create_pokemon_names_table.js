'use strict';

exports.up = function (Knex, Promise) {
    return Knex.schema.createTable('pokemon_names', (table) => {
        table.primary(['pokemon_id', 'language']);
        table.integer('pokemon_id').notNullable().references('id').inTable('pokemon').onDelete('CASCADE').index();
        table.text('language').notNullable();
        table.text('name').notNullable();
    })
        .then(() => Knex('pokemon'))
        .map((pokemon) => {
            return Promise.all([
                pokemon.name && Knex('pokemon_names').insert({
                    pokemon_id: pokemon.id,
                    language: 'en',
                    name: pokemon.name
                })
            ])
        });
}

exports.down = function (Knex) {
    return Knex.schema.dropTable('pokemon_names');
}