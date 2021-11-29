const { listItemsService } = require('./ListItemsService');
const { createItemService } = require('./CreateItemService');

describe('ListItemsService', () => {
  it('should be able to get a specific items of order', async () => {
    for (i = 1; i <= 5; i++) {
      await createItemService({
        pedido_id: 9999,
        produto_id: i,
        preco: 10,
        quantidade: 2,
        total: 20,
      });
    }

    const itens = await listItemsService(9999);

    expect(itens.length).toEqual(5);
  });

})