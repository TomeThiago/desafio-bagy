const { findProducts } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ProductRepository' : '../repositories/ProductRepository');

async function listProductsService() {
  const products = await findProducts();

  return products;
}

module.exports = { listProductsService };