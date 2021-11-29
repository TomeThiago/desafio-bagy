const { createProductService } = require('./CreateProductService');
const { updateProductService } = require('./UpdateProductService');

describe('UpdateProductService', () => {
  it('should be able to update a specific product', async () => {
    await createProductService({
      nome: "Camiseta Preta M",
      descricao: "Camiseta Branca lisa do tamanho P",
      imagem: "camiseta_branca.jpg",
      preco: 19.99,
      peso: 0.876,
      quantidade: 15,
    });

    const product = await createProductService({
      nome: "Camiseta Preta M",
      descricao: "Camiseta Branca lisa do tamanho P",
      imagem: "camiseta_branca.jpg",
      preco: 19.99,
      peso: 0.876,
      quantidade: 15,
    });

    product.preco = 20.99;

    const productUpdated = await updateProductService(product);

    expect(productUpdated.preco).toBe(20.99);
  });
});