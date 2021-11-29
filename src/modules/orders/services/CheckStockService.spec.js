const { checkStockService } = require('./CheckStockService');
const { createProductService } = require('../../products/services/CreateProductService');

describe('CheckStockService', () => {
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

    checkStockService(listItens);
  });

  it('should not be able to pass the inventory check due to lack of stock', async () => {
    const product = await createProductService({
      nome: "Camiseta Preta M",
      descricao: "Camiseta Branca lisa do tamanho P",
      imagem: "camiseta_branca.jpg",
      preco: 19.99,
      peso: 0.876,
      quantidade: 0,
    });

    const listItens = [{
      pedido_id: 999,
      produto_id: product.id,
      preco: product.preco,
      quantidade: 2,
      total: product.preco * 2,
    }];

    await expect(
      checkStockService(listItens)
    ).rejects.toThrow(`O produto ${product.id} - ${product.nome} está com saldo indisponível, saldo: ${product.quantidade}`);
  });
});