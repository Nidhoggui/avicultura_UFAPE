const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { linhagem, idade, nutrição, numero_de_aves } = request.body;
    const granja_id = request.headers.authorization;

    const [id] = await connection('lotes').insert({
      linhagem,
      idade,
      nutrição,
      numero_de_aves,
      granja_id,
    });

    return response.json({
      id
    });
  },
  async index(request, response) {
    const { page = 1} = request.query;
    const granja_id = request.headers.authorization;
    const lotes = await connection('lotes').limit(10).offset((page-1)*1).where('granja_id', granja_id).select('*');
    
    return response.json(lotes);
  },
  async delete(request, response){
    const { id } = request.params;
    const granja_id = request.headers.authorization;
    const lotes = await connection('lotes').where('id', id).select('granja_id').first();

    if(lotes.granja_id !== granja_id){
      return response.status(401).json({ error: 'Impossivel deletar o lote, verifique as dependencias'});
    }

    await connection ('lotes').where('id', id).delete();
    return response.status(204).send();
  },
};
