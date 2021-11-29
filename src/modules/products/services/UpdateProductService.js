const { update } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ProductRepository' : '../repositories/ProductRepository');

async function updateProductService(data) {
  const product = await update(data);

  return product;
}

module.exports = { updateProductService };