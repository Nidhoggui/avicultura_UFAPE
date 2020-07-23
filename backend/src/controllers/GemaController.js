const connection = require('../database/connection');

module.exports = {
  async index(request,response){
    const gemas=await connection('gemas').select('*');
    response.json(gemas);
  },
  async create(request, response){
    const { pesoGema, alturaGema, diametroGema, corGema } = request.body;

    const [id] = await connection('gemas').insert({
      pesoGema,
      alturaGema,
      diametroGema,
      corGema,
    });
    return response.json({
      id
    });
  },

  async delete(request, response){
    const { id } = request.params;
    await connection ('gemas').where('id', id).delete();
  },
  async update(request, response, next){
    try{
      const { id } = request.params;
      const { peso, altura, diametro, indice, cor } = request.body;

      await connection('gemas').update({ peso, altura, diametro, indice, cor }).where('id', id);
      return response.send();
    }catch(error){
      next(error);
    }
  },
}
