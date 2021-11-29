const { connectionDB } = require('../../../prisma');

async function findProducts() {
  const products = await connectionDB.produtos.findMany();

  return products;
}

async function findProductById(product_id) {
  const product = await connectionDB.produtos.findFirst({
    where: {
      id: product_id,
    }
  });

  return product;
}

async function create(data) {
  const product = await connectionDB.produtos.create({
    data
  });

  return product;
}

async function update(data) {
  const id = data.id;

  const product = await connectionDB.produtos.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });

  return product;
}

module.exports = { findProducts, findProductById, create, update };