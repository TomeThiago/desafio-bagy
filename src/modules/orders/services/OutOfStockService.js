const { showProductService } = require('../../products/services/ShowProductService');
const { updateProductService } = require('../../products/services/UpdateProductService');

async function outOfStockService(products) {
  await Promise.all(products.map(async product => {
    const productExist = await showProductService(product.produto_id);

    if(!productExist) {
      throw new Error(`O produto ${product.produto_id} não encontrado.`);
    }

    productExist.quantidade -= product.quantidade;

    await updateProductService(productExist);
  }));
};

module.exports = { outOfStockService };