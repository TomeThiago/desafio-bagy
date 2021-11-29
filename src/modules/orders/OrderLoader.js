const { showOrderService } = require('./services/ShowOrderService');
const { listOrdersService } = require('./services/ListOrdersService');
const { createOrderService } = require('./services/CreateOrderService');

async function getOrders(_, { id }) {
  let orders = [];

  if (id) {
    orders.push(await showOrderService(id));
  } else {
    orders = await listOrdersService();
  }

  return orders;
}

async function saveOrder(_, { input }) {
  const order = await createOrderService(input);

  return order;
}

module.exports = { getOrders, saveOrder };