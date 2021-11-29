const { findClientByCPF, create } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ClientRepository' : '../repositories/ClientRepository');

async function createClientService(data) {
  const cpfExist = await findClientByCPF(data.cpf);

  if(cpfExist) {
    throw new Error('Já existe um cliente cadastrado com esse cpf.');
  }
  
  const client = await create(data);

  return client;
}

module.exports = { createClientService };