const { clientMutations } = require('./clients');
const { productMutations } = require('./products');
const { ordersMutations } = require('./orders');

module.exports = {
  ...clientMutations,
  ...productMutations,
  ...ordersMutations,
};