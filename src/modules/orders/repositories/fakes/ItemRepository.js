const dataItens = [
  {
    id: 59,
    pedido_id: 86,
    produto_id: 6,
    preco: 19.78,
    quantidade: 1
  },
  {
    id: 60,
    pedido_id: 86,
    produto_id: 1,
    preco: 19.78,
    quantidade: 1
  },
  {
    id: 61,
    pedido_id: 88,
    produto_id: 1,
    preco: 19.78,
    quantidade: 1
  },
  {
    id: 62,
    pedido_id: 88,
    produto_id: 6,
    preco: 19.78,
    quantidade: 1
  }
];

async function findItems(order_id) {
  const items = dataItens.filter(item => item.pedido_id === order_id);

  return items;
}

async function create(data) {
  const item = { id: dataItens.length + 1, ...data };

  dataItens.push(item);

  return item;
}

module.exports = { findItems, create };