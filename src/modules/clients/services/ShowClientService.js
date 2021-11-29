const { findClientById } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ClientRepository' : '../repositories/ClientRepository');

async function showClientService(client_id) {
  const client = await findClientById(client_id);

  return client;
}

module.exports = { showClientService };