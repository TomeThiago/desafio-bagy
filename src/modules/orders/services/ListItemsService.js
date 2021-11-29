const { findItems } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ItemRepository' : '../repositories/ItemRepository');

async function listItemsService(order_id) {
  const items = await findItems(order_id);

  return items;
}

module.exports = { listItemsService };