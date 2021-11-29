const { listProductsService } = require('./ListProductsService');
const { createProductService } = require('./CreateProductService');

describe('ListProductsService', () => {
  it('should be able list all clients', async () => {
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

    const products = await listProductsService();

    expect(products.length).toEqual(5);
  });

})