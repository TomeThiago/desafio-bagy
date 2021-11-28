import { connectionDB } from '../../../prisma';

export async function outOfStock(products) {
  await Promise.all(products.map(async product => {
    const productExist = await connectionDB.produtos.findFirst({
      where: {
        id: product.produto_id, 
      }
    });

    if(!productExist) {
      throw new Error(`O produto ${product.produto_id} não encontrado.`);
    }

    await connectionDB.produtos.update({
      data: {
        quantidade: productExist.quantidade -= product.quantidade,
      },
      where: {
        id: productExist.id,
      }
    });
  }));
}