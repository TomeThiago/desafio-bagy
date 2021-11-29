const { createClientService } = require('./services/CreateClientService');
const { listClientsService } = require('./services/ListClientsService');

async function getClients() {
  const clients = await listClientsService();

  return clients;
}

async function saveClient(_, { input }) {  
  const client = await createClientService(input);

  return client;
}

module.exports = { getClients, saveClient };