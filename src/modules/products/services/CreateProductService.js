const { create } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ProductRepository' : '../repositories/ProductRepository');

async function createProductService(data) {
  const product = await create(data);

  return product;
}

module.exports = { createProductService };