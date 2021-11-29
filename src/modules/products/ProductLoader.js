const { listProductsService } = require('./services/ListProductsService');
const { createProductService } = require('./services/CreateProductService');

async function getProducts() {
  const products = await listProductsService();

  return products;
}

async function saveProduct(_, { input }) {
  const product = await createProductService(input);

  return product;
}

module.exports = { getProducts, saveProduct };