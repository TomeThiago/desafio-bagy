const { showOrderService } = require('./ShowOrderService');

describe('ShowClientService', () => {
  it('should be able to get a specific order', async () => {
    const order = await showOrderService(86);

    expect(order.id).toEqual(86);
  });

})