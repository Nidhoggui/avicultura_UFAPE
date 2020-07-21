const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nomefantasia, razaosocial, cnpj, proprietario, gaiola, localizacao, termos_de_uso } = request.body;
    const id = crypto.randomBytes(3).toString('HEX');
    await connection('granjas').insert({
      id,
      nomefantasia,
      razaosocial,
      cnpj,
      proprietario,
      gaiola,
      localizacao,
      termos_de_uso
    });
    return response.json({
      id
    });
  },
  async index(request,response){
    const granjas=await connection('granjas').select('*');

    return response.json(granjas)
  }
};
