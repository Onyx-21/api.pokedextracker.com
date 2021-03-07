'use strict';

const PokemonName = require('../../src/models/pokemon-name');
const PokemonNameFactory = Factory.build('pokemon-name');

describe('pokemon name model', () => {
    describe('serialize', () => {
        it('returns the correct fields', () => {
            const model = PokemonName.forge(PokemonNameFactory);
            const json = model.serialize();

            expect(json).to.have.all.keys([
                'language',
                'name'
            ]);
            expect(json.id).to.eql(PokemonNameFactory.id);
        });
    })
});