const { findOrders } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/OrderRepository' : '../repositories/OrderRepository');

async function listOrdersService() {
  const orders = await findOrders();

  return orders;
}

module.exports = { listOrdersService };