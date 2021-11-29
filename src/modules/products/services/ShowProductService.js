const { findProductById } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ProductRepository' : '../repositories/ProductRepository');

async function showProductService(product_id) {
  const product = await findProductById(product_id);

  return product;
}

module.exports = { showProductService };