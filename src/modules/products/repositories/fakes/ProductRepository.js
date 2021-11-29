const dataProducts = [];

async function findProducts() {
  const products = dataProducts;

  return products;
}

async function findProductById(product_id) {
  const product = dataProducts.filter(product => product.id === product_id);

  return product[0];
}

async function create(data) {
  const product = { id: dataProducts.length + 1, ...data };

  dataProducts.push(product);

  return product;
}

async function update(data) {
  const index = dataProducts.findIndex(product => product.id === data.id);

  dataProducts[index] = data;

  return dataProducts[index];
}

module.exports = { findProducts, findProductById, create, update };