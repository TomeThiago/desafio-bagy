const { findOrders } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/OrderRepository' : '../repositories/OrderRepository');

async function listOrdersService(order_id) {
  const orders = await findOrders(order_id);

  return orders;
}

module.exports = { listOrdersService };