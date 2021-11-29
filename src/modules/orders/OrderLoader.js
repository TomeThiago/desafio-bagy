const { listOrdersService } = require('./services/ListOrdersService');
const { createOrderService } = require('./services/CreateOrderService');

async function getOrders(_, { id }) {
  const orders = await listOrdersService(id);

  return orders;
}

async function saveOrder(_, { input }) {
  const order = await createOrderService(input);

  return order;
}

module.exports = { getOrders, saveOrder };