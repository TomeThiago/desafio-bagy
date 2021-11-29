const { showProductService } = require('./ShowProductService');
const { createProductService } = require('./CreateProductService');

describe('ShowProductService', () => {
  it('should be able to get a specific product', async () => {
    for (i = 1; i <= 5; i++) {
      await createProductService({
        nome: "Camiseta Preta M",
        descricao: "Camiseta Branca lisa do tamanho P",
        imagem: "camiseta_branca.jpg",
        preco: 19.99,
        peso: 0.876,
        quantidade: 15,
      });
    }

    const product = await showProductService(2);

    expect(product.id).toEqual(2);
  });
});