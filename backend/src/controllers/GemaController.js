const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { peso, altura, diametro, indice, cor } = request.body;

    const [id] = await connection('cascas').insert({
      peso,
      altura,
      diametro,
      indice,
      cor,
    });
    return response.json({
      id
    });
  },
}
