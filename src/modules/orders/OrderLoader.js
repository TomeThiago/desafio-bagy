import { connectionDB } from '../../prisma';

import { checkStock } from '../items/services/CheckStock';
import { outOfStock } from '../items/services/OutOfStock';
import { sendSaleEmail } from './services/SendSaleEmail';

export async function getOrders(_, { id }) {
  const orders = await connectionDB.pedidos.findMany({
    include: {
      itens: true
    },
    where: {
      id: id || undefined,
    }
  });

  return orders;
}

export async function saveOrder(_, { input }) {
  const { data_criacao, parcelas, status, cliente_id, itens } = input;

  const client = await connectionDB.clientes.findFirst({
    where: {
      id: cliente_id,
    }
  });

  if (!client) {
    throw new Error(`O cliente ${order.cliente_id} não foi encontrado.`)
  }

  await checkStock(itens);

  let total = 0;

  itens.forEach(item => {
    total += item.preco * item.quantidade;
  });

  let order = await connectionDB.pedidos.create({
    data: {
      data_criacao,
      parcelas,
      total,
      status,
      cliente_id,
    }
  });

  await outOfStock(itens);

  itens.forEach(async item => {
    await connectionDB.itens.create({
      data: {
        pedido_id: order.id,
        produto_id: item.produto_id,
        preco: item.preco,
        quantidade: item.quantidade,
        total: item.quantidade * item.preco,
      }
    });
  });

  sendSaleEmail(client, order);

  order = await connectionDB.pedidos.findFirst({
    where: {
      id: order.id,
    },
    include: {
      itens: true
    },
  });

  return order;
}