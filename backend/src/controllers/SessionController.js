const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const granja = await connection('granjas').where('id', id).select('nomefantasia', 'razaosocial').first();

    if(!granja){
      return response.status(400).json({ error: 'Granja não cadastrada, por favor cadastre uma granja e receba um identificador valido no sistema' });
    }

    return response.json(granja);
  }
}
