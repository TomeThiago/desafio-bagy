const { findItems } = require('../fakes/ItemRepository');

const dataOrders = [
  {
    id: 86,
    parcelas: 1,
    total: 118.68,
    status: "Pago",
    itens: [
      {
        id: 59,
        pedido_id: 86,
        produto_id: 6,
        preco: 19.78
      },
      {
        id: 60,
        pedido_id: 86,
        produto_id: 1,
        preco: 19.78
      }
    ]
  },
  {
    id: 87,
    parcelas: 1,
    total: 118.68,
    status: "Pago",
    itens: []
  },
  {
    id: 88,
    parcelas: 1,
    total: 118.68,
    status: "Pago",
    itens: [
      {
        id: 61,
        pedido_id: 88,
        produto_id: 1,
        preco: 19.78
      },
      {
        id: 62,
        pedido_id: 88,
        produto_id: 6,
        preco: 19.78
      }
    ]
  },
];

async function findOrders() {
  const orders = dataOrders;

  orders.forEach(order => {
    order.itens = findItems(order.id);
  });

  return orders;
}

async function findOrderById(order_id) {
  const order = dataOrders.filter(order => order.id === order_id);

  order[0].itens = findItems(order[0].id);

  return order[0];
}

async function create(data) {
  const order = { id: dataOrders.length + 1, ...data };

  dataOrders.push(order);

  return order;
}

module.exports = { findOrders, findOrderById, create };