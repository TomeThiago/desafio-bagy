const { createProductService } = require('./CreateProductService');

describe('CreateProductService', () => {
  it('should be able create new product', async () => {
    const product = await createProductService({
      nome: "Camiseta Preta M",
      descricao: "Camiseta Branca lisa do tamanho P",
      imagem: "camiseta_branca.jpg",
      preco: 19.99,
      peso: 0.876,
      quantidade: 15,
    });

    expect(product).toHaveProperty('id');
  });
});