import { connectionDB } from '../../prisma';

export async function getProducts() {
  const products = await connectionDB.produtos.findMany();

  return products;
}

export async function saveProduct(_, { input }) {
  const product = await connectionDB.produtos.create({
    data: input,
  });

  return product;
}