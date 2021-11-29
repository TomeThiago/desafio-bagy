const { connectionDB } = require('../../../prisma');

async function findClients() {
  const clients = await connectionDB.clientes.findMany();

  return clients;
}

async function findClientById(client_id) {
  const client = await connectionDB.clientes.findFirst({
    where: {
      id: client_id
    }
  });

  return client;
}

async function findClientByCPF(cpf) {
  const cpfExist = await connectionDB.clientes.findFirst({
    where: {
      cpf
    }
  });

  return cpfExist;
}

async function create(data) {
  const client = await connectionDB.clientes.create({
    data
  });

  return client;
}

module.exports = { findClients, findClientById, findClientByCPF, create }