const { createClientService } = require('./CreateClientService');

describe('CreateClientService', () => {
  it('should be able create new customer', async () => {
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

    expect(client).toHaveProperty('id');
  });

  it('should not be able create new client with same cpf from another client', async () => {
    await expect(
      createClientService({
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
      })
    ).rejects.toThrow('Já existe um cliente cadastrado com esse cpf.');
  });
})