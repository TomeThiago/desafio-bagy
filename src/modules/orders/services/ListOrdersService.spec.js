const { listOrdersService } = require('./ListOrdersService');

describe('ListOrdersService', () => {
  it('should be able to get a specific order', async () => {
    const orders = await listOrdersService();

    expect(orders.length).toEqual(3);
  });

})