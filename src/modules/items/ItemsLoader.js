import { connectionDB } from '../../prisma';

export async function getItems() {
  const items = await connectionDB.itens.findMany();

  return items;
}

export async function saveItems(_, { input }) {
  const item = await connectionDB.itens.create({
    data: input,
  });

  return item;
}