const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { nomeFantasia, razaoSocial, cnpj, proprietario, gaiola, localizacao, termosDeUso, email, password } = request.body;
    const id = crypto.randomBytes(3).toString('HEX');

    if(termosDeUso){
      await connection('granjas').insert({
        id,
        nomeFantasia,
        razaoSocial,
        cnpj,
        proprietario,
        gaiola,
        localizacao,
        termosDeUso,
        email,
        password
      });
      return response.json({
        id
      });
    }else{
      return response.status(428).json({error:'Termos de uso não asssinalado'});
    }

  },
  async index(request,response){
    const granjas=await connection('granjas').select('*');

    return response.json(granjas)
  }
};
