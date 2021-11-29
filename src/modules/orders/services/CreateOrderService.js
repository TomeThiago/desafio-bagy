const { create } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/OrderRepository' : '../repositories/OrderRepository');

const { showClientService } = require('../../clients/services/ShowClientService');

const { checkStockService } = require('./CheckStockService');
const { outOfStockService } = require('./OutOfStockService');
const { createItemService } = require('./CreateItemService');
const { showOrderService } = require('./ShowOrderService');

const { sendSaleEmailService } = require('./SendSaleEmailService');

async function createOrderService(data) {
  const { data_criacao, parcelas, status, cliente_id, itens } = data;

  const client = await showClientService(cliente_id);

  if (!client) {
    throw new Error(`O cliente ${cliente_id} não foi encontrado.`)
  }

  await checkStockService(itens);

  let total = 0;

  itens.forEach(item => {
    total += item.preco * item.quantidade;
  });

  let order = await create({
    data_criacao,
    parcelas,
    total,
    status,
    cliente_id,
  });

  await outOfStockService(itens);

  await Promise.all(itens.map(async item => {
    await createItemService({
      pedido_id: order.id,
      produto_id: item.produto_id,
      preco: item.preco,
      quantidade: item.quantidade,
      total: item.quantidade * item.preco,
    });
  }));

  sendSaleEmailService(client, order);

  order = await showOrderService(order.id);

  return order;
}

module.exports = { createOrderService };