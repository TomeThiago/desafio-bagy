const { listProductsService } = require('./services/ListProductsService');
const { showProductService } = require('./services/ShowProductService');
const { createProductService } = require('./services/CreateProductService');

async function getProducts(_, { id }) {
  let products = [];
  
  if (id) {
    products.push(await showProductService(id));
  } else {
    products = await listProductsService();
  }

  return products;
}

async function saveProduct(_, { input }) {
  const product = await createProductService(input);

  return product;
}

module.exports = { getProducts, saveProduct };