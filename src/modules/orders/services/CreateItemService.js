const { create } = require(process.env.NODE_ENV == "test" ? '../repositories/fakes/ItemRepository' : '../repositories/ItemRepository');

async function createItemService(data) { 
  const item = await create(data);

  return item;
}

module.exports = { createItemService };