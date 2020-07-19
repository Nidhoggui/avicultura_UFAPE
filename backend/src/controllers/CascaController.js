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

  async delete(request, response){
    const { id } = request.params;
    await connection ('cascas').where('id', id).delete();
  },
  async update(request, response, next){
    try{
      const { id } = request.params;
      const { peso, cor, espessura0, espessura1, espessura2, espessuraMedia } = request.body;

      await connection('cascas').update({ peso, cor, espessura0, espessura1, espessura2, espessuraMedia }).where('id', id);
      return response.send();
    }catch(error){
      next(error);
    }
  },
}
