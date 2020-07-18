const connection = require('../database/connection');
const GemaController = require('./GemaController');
const AlbúmenController = require('./AlbúmenController');
const CascaController = require('./CascaController');
const LoteController = require('./LoteController')

module.exports = {
  async create(request, response) {
    const { peso } = request.body;
    const id_gema = request.headers.GemaController;
    const id_albumen = request.headers.AlbúmenController;
    const id_casca = request.headers.CascaController;
    const lote_id = request.headers.LoteController;

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
}
