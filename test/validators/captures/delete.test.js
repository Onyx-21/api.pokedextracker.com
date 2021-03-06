'use strict';

const Joi = require('joi');

const CapturesDeleteValidator = require('../../../src/validators/captures/delete');

describe('captures delete validator', () => {

  describe('dex', () => {

    it('is required', () => {
      const data = { pokemon: [1] };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error.details[0].path).to.eql('dex');
      expect(result.error.details[0].type).to.eql('any.required');
    });

    it('allows integers', () => {
      const data = { dex: 1, pokemon: [1] };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error).to.not.exist;
    });

  });

  describe('pokemon', () => {

    it('is required', () => {
      const data = { dex: 1 };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error.details[0].path).to.eql('pokemon');
      expect(result.error.details[0].type).to.eql('any.required');
    });

    it('allows an array of integers', () => {
      const data = { dex: 1, pokemon: [1] };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error).to.not.exist;
      expect(result.value.pokemon).to.eql([1]);
    });

    it('allows a single integer', () => {
      const data = { dex: 1, pokemon: 1 };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error).to.not.exist;
      expect(result.value.pokemon).to.eql([1]);
    });

    it('disallows an array of strings', () => {
      const data = { dex: 1, pokemon: ['test'] };
      const result = Joi.validate(data, CapturesDeleteValidator);

      expect(result.error.details[0].path).to.eql('pokemon.0');
      expect(result.error.details[0].type).to.eql('number.base');
    });

  });

});
