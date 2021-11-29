const { outOfStockService } = require('./OutOfStockService');
const { createProductService } = require('../../products/services/CreateProductService');

describe('OutOfStockService', () => {
  it('should be able create new item of order', async () => {
    const listItens = [];

    for (i = 0; i <= 3; i++) {
      const product = await createProductService({
        nome: "Camiseta Preta M",
        descricao: "Camiseta Branca lisa do tamanho P",
        imagem: "camiseta_branca.jpg",
        preco: 19.99,
        peso: 0.876,
        quantidade: 15,
      });

      listItens.push({
        pedido_id: 999,
        produto_id: product.id,
        preco: product.preco,
        quantidade: 2,
        total: product.preco * 2,
      });
    }

    outOfStockService(listItens);
  });

  it('should not be able to check out the inventory if the product does not exist.', async () => {
    const listItens = [{
      pedido_id: 999,
      produto_id: 0,
      preco: 9.99,
      quantidade: 2,
      total: 9.99 * 2,
    }];

    await expect(
      outOfStockService(listItens)
    ).rejects.toThrow('O produto 0 não encontrado.');
  });
});