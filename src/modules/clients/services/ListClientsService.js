const { findClients } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ClientRepository' : '../repositories/ClientRepository');

async function listClientsService() {
  const clients = await findClients();

  return clients;
}

module.exports = { listClientsService };