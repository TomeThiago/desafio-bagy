const { connectionDB } = require('../../../prisma');

async function findOrders() {
  const orders = await connectionDB.pedidos.findMany({
    include: {
      itens: true
    },
  });

  return orders;
}

async function findOrderById(order_id) {
  const order = await connectionDB.pedidos.findFirst({
    include: {
      itens: true
    },
    where: {
      id: order_id,
    }
  });

  return order;
}

async function create(data) {
  const order = await connectionDB.pedidos.create({
    data,
  });

  return order;
}

module.exports = { findOrders, findOrderById, create };