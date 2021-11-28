import { clientMutations } from './clients';
import { productMutations } from './products';
import { ordersMutations } from './orders';
import { itemsMutations } from './items';

export default {
  ...clientMutations,
  ...productMutations,
  ...ordersMutations,
  ...itemsMutations,
};