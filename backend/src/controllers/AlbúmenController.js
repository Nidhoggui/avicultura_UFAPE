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

  async delete(request, response){
    const { id } = request.params;
    await connection ('albúmen').where('id', id).delete();
  },
  async update(request, response, next){
    try{
      const { id } = request.params;
      const { peso, altura, diametro, haugh } = request.body;

      await connection('albúmen').update({ peso, altura, diametro, haugh }).where('id', id);
      return response.send();
    }catch(error){
      next(error);
    }
  },
}
