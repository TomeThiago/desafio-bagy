const { createClientService } = require('./services/CreateClientService');
const { listClientsService } = require('./services/ListClientsService');
const { showClientService } = require('./services/ShowClientService');

async function getClients(_, { id }) {
  let clients = [];

  if (id) {
    clients.push(await showClientService(id));
  } else {
    clients = await listClientsService();
  }
  return clients;
}

async function saveClient(_, { input }) {  
  const client = await createClientService(input);

  return client;
}

module.exports = { getClients, saveClient };