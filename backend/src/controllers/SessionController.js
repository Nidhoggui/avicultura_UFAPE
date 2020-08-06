const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;
    const granja = await connection('granjas').where('password', password).where('email', email).select('nomefantasia', 'razaosocial').first();

    if(!granja){
      return response.status(400).json({ error: 'Granja não cadastrada, por favor cadastre uma granja para acessar o sistema' });
    }

    return response.json(granja);
  },
  async emailcheck(request, response){
  const email = request.body
  const granja = await connection('granjas').where('password', password).where('email', email).select('email').first();

  if(!granja){
    return response.status(400).json({ error: 'Granja não cadastrada, por favor cadastre uma granja para acessar o sistema' });
  }
    return response,json(email);
  },
  async updatepassword(request, response){
    const email = request.body
    const passoword = request.body
    await connection('granja').update( password ).where('email', email)
    return response.send();
  }
}
