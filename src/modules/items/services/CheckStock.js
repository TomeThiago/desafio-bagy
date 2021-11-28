import { connectionDB } from '../../../prisma';

export async function checkStock(itens) {
  await Promise.all(itens.map(async item => {
    const itemExist = await connectionDB.produtos.findUnique({
      where: {
        id: item.produto_id,
      }
    });

    const balance = itemExist.quantidade - item.quantidade;

    if (balance < 0) {
      throw new Error(`O produto ${itemExist.id} - ${itemExist.nome} está com saldo indisponível, saldo: ${itemExist.quantidade}`);
    }
  }));
}