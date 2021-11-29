const { findOrderById } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/OrderRepository' : '../repositories/OrderRepository');

async function showOrderService(order_id) {
  const order = await findOrderById(order_id);

  return order;
}

module.exports = { showOrderService };