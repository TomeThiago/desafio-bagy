const { clientQueries } = require('./clients');
const { productQueries } = require('./products');
const { ordersQueries } = require('./orders');

module.exports = {
  ...clientQueries,
  ...productQueries,
  ...ordersQueries,
};