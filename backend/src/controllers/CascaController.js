const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { peso, cor, espessura0, espessura1, espessura2, espessuraMedia } = request.body;

    const [id] = await connection('cascas').insert({
      peso,
      cor,
      espessura0,
      espessura1,
      espessura2,
      espessuraMedia,
    });
    return response.json({
      id
    });
  },
}
