const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { pesoOvo, id_gema, id_albumen, id_casca, lote, secaoOvo } = request.body;
    const granja_id = request.headers.authorization;

    const [id] = await connection('ovos').insert({
      pesoOvo,
      id_gema,
      id_albumen,
      id_casca,
      lote,
      granja_id,
      secaoOvo
    });
    return response.json({
      id
    });
    },
    async index(request, response) {
      const { page = 1} = request.query;
      const lote_id = request.body;
      const secaoOvo = request.body;
      const ovos = await connection('ovos').join('granjas','granjas.id','=','lotes.granja_id').where('secaoOvo', secaoOvo).select('*');

      return response.json(ovos);
    },
    async delete(request, response){
      const { id } = request.params;
      const { lote_id, id_gema, id_albumen, id_casca } = request.body;
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
