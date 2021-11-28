import { clientQueries } from './clients';
import { productQueries } from './products';
import { ordersQueries } from './orders';
import { itemsQueries } from './items';

export default {
  ...clientQueries,
  ...productQueries,
  ...ordersQueries,
  ...itemsQueries,
};