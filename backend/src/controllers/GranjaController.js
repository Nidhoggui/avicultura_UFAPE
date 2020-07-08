const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nomefantasia, razaosocial, cnpj, proprietario, gaiola } = request.body;
    const id = crypto.randomBytes(3).toString('HEX');
    await connection('granjas').insert({
      id,
      nomefantasia,
      razaosocial,
      cnpj,
      proprietario,
      gaiola
    });
    return response.json({
      id
    });
  }
};
