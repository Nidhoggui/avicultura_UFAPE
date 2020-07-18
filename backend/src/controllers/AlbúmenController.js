const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { peso, altura, diametro, haugh } = request.body;

    const [id] = await connection('albumen').insert({
      peso,
      altura,
      diametro,
      haugh,
    });
    return response.json({
      id
    });
  },
}
