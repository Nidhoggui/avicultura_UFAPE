const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { peso } = request.body;
    const id_gema = request.headers.gemas;
    const id_albumen = request.headers.albumen;
    const id_casca = request.headers.cascas;
    const lote_id = request.headers.lotes;

    const [id] = await connection('lotes').insert({
      peso,
      id_gema,
      id_albumen,
      id_casca,
      lote_id,
    });
    return response.json({
      id
    });
    },
    async index(request, response) {
      const { page = 1} = request.query;
      const lote_id = request.headers.lotes;
      const ovos = await connection('ovos').limit(10).offset((page-1)*1).where('lote_id', lote_id).select('*');

      return response.json(ovos);
    },
    async delete(request, response){
      const { id } = request.params;
      const lote_id = request.headers.lotes;
      const id_gema = request.headers.gemas;
      const id_albumen = request.headers.albúmen;
      const id_casca = request.headers.cascas;
      const ovos = await connection('ovos').where('id', id).select('lote_id').first();

      if(ovos.lote_id !== lote_id && ovos.id_gema !== id_gema && ovos.id_albumen !== id_albumen && ovos.id_casca !== id_casca){
        return response.status(401).json({ error: 'Impossivel deletar o ovo, verifique se está no lote correto e todas as dependências estão preenchidas'});
      }

      await connection ('ovos').where('id', id).delete();
      await connection ('gemas').where('id', id_gema).delete();
      await connection ('albúmen').where('id', id_albumen).delete();
      await connection ('cascas').where('id', id_casca).delete();
      return response.status(204).send();
    },
    async update(request, response, next){
      try{
        const { id } = request.params;
        const { peso } = request.body;

        await connection('ovos').update({ peso }).where('id', id);
        return response.send();
      }catch(error){
        next(error);
      }
    },
}
