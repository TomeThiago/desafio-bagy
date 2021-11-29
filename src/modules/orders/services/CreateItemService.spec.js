const { createItemService } = require('./CreateItemService');

describe('CreateItemService', () => {
  it('should be able create new item of order', async () => {
    const item = await createItemService({
      pedido_id: 86,
      produto_id: 1,
      preco: 10,
      quantidade: 2,
      total: 20,
    });

    expect(item).toHaveProperty('id');
  });
});