const { showProductService } = require('../../products/services/ShowProductService')

async function checkStockService(itens) {
  await Promise.all(itens.map(async item => {
    const itemExist = await showProductService(item.produto_id);

    if(!itemExist) {
      throw new Error(`O produto ${item.produto_id} não encontrado.`);
    }

    const balance = itemExist.quantidade - item.quantidade;

    if (balance < 0) {
      throw new Error(`O produto ${itemExist.id} - ${itemExist.nome} está com saldo indisponível, saldo: ${itemExist.quantidade}`);
    }
  }));
};

module.exports = { checkStockService };