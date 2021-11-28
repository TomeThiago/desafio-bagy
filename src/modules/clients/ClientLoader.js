import { connectionDB } from '../../prisma';

export async function getClients() {
  const clients = await connectionDB.clientes.findMany();

  return clients;
}

export async function saveClient(_, { input }) {
  const cpfExist = await connectionDB.clientes.findFirst({
    where: {
      cpf: input.cpf
    }
  });

  if(cpfExist) {
    throw new Error('Já existe um cliente cadastrado com esse cpf.');
  }
  
  const client = await connectionDB.clientes.create({
    data: input
  });

  return client;
}