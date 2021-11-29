const { createOrderService } = require('./CreateOrderService');
const { createClientService } = require('../../clients/services/CreateClientService');
const { createProductService } = require('../../products/services/CreateProductService');

describe('CreateOrderService', () => {
  it('should be able create new item of order', async () => {
    const client = await createClientService({
      nome: 'Cliente 1',
      email: 'teste@teste.com',
      cpf: '000000000-00',
      data_nascimento: new Date(),
      rua: 'Rua 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      estado: 'SP',
      pais: 'Brasil',
      cep: '00000-000',
      numero: 111
    });

    const product = await createProductService({
      nome: "Camiseta Preta M",
      descricao: "Camiseta Branca lisa do tamanho P",
      imagem: "camiseta_branca.jpg",
      preco: 19.99,
      peso: 0.876,
      quantidade: 15,
    });

    const order = await createOrderService({
      cliente_id: client.id,
      data_criacao: "2021-11-29",
      parcelas: 1,
      status: "Pendente",
      itens: [
        {
          produto_id: product.id,
          preco: product.preco,
          quantidade: 1
        },
      ],
    });

    expect(order).toHaveProperty('id');
  });

  it('should not be able to create a new order with a non-existent customer', async () => {
    await expect(
      createOrderService({
        cliente_id: 0,
        data_criacao: "2021-11-29",
        parcelas: 1,
        status: "Pendente",
      })
    ).rejects.toThrow('O cliente 0 não foi encontrado.');
  });

  it('should not be able to create a new order with a non-existent product', async () => {
    const client = await createClientService({
      nome: 'Cliente 1',
      email: 'teste@teste.com',
      cpf: '9879695855-50',
      data_nascimento: new Date(),
      rua: 'Rua 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      estado: 'SP',
      pais: 'Brasil',
      cep: '00000-000',
      numero: 111
    });

    await expect(
      createOrderService({
        cliente_id: client.id,
        data_criacao: "2021-11-29",
        parcelas: 1,
        status: "Pendente",
        itens: [
          {
            produto_id: 0,
            preco: 9.99,
            quantidade: 1
          },
        ],
      })
    ).rejects.toThrow('O produto 0 não encontrado.');
  });
});