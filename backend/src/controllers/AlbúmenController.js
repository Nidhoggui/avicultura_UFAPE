const connection = require('../database/connection');

module.exports = {
  async create(request, response){
    const { pesoAlbumen, alturaAlbumen, diametroAlbumen } = request.body;

    const [id] = await connection('albumen').insert({
      pesoAlbumen,
      alturaAlbumen,
      diametroAlbumen,
    });
    return response.json({
      id
    });
  },

  async delete(request, response){
    const { id } = request.params;
    await connection ('albumen').where('id', id).delete();
  },
  async update(request, response, next){
    try{
      const { id } = request.params;
      const { peso, altura, diametro } = request.body;

      await connection('albumen').update({ peso, altura, diametro }).where('id', id);
      return response.send();
    }catch(error){
      next(error);
    }
  },
  async index(request,response){
    const albumen=await connection('albumen').select('*');
    return response.json(albumen)
  },
}
