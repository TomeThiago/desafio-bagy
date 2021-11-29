const dataClients = [];

async function findClients() {
  const clients = dataClients;

  return clients;
}

async function findClientById(id) {

  const client = dataClients.filter(client => client.id === id);

  return client[0];
}

async function findClientByCPF(cpf) {
  const cpfExist = dataClients.filter(client => client.cpf === cpf);

  return cpfExist[0];
}

async function create(data) {
  const client = { id: dataClients.length + 1, ...data };

  dataClients.push(client);

  return client;
}

module.exports = { findClients, findClientById, findClientByCPF, create }