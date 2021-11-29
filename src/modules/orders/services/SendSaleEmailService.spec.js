const { createClientService } = require('../../clients/services/CreateClientService');
const { createProductService } = require('../../products/services/CreateProductService');
const { createOrderService } = require('./CreateOrderService');

const { sendSaleEmailService } = require('./SendSaleEmailService');

describe('SendSaleEmailService', () => {
  it('should be able to send a purchase email', async () => {
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

    sendSaleEmailService(client, order);
  });

})