const { listClientsService } = require('./ListClientsService');
const { createClientService } = require('./CreateClientService');

describe('ListClientsService', () => {
  it('should be able list all customers', async () => {
    for (i = 1; i <= 5; i++) {
      await createClientService({
        nome: `Cliente ${i}`,
        email: 'teste@teste.com',
        cpf: `000000000-0${i}`,
        data_nascimento: new Date(),
        rua: 'Rua 1',
        bairro: `Bairro ${i}`,
        cidade: `Cidade ${i}`,
        estado: 'SP',
        pais: 'Brasil',
        cep: '00000-000',
        numero: i
      });
    }

    const clients = await listClientsService();

    expect(clients.length).toEqual(5);
  });

})