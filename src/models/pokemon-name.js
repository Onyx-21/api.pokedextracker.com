'use strict';

const Bookshelf = require('../libraries/bookshelf');

module.exports = Bookshelf.model('PokemonName', Bookshelf.Model.extend({
    tableName: 'pokemon_names',
    serialize() {
        return {
            language: this.get('language'),
            name: this.get('name')
        };
    }
}));