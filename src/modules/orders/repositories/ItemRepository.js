const { connectionDB } = require('../../../prisma');

async function create(data) {
  const item = await connectionDB.itens.create({
    data
  });

  return item;
}

module.exports = { create };