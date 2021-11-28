import {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLFloat,
} from 'graphql';

import ItemsType from './types/ItemsType';

import { getItems, saveItems } from './ItemsLoader';

export const itemsQueries = {
  items: {
    type: new GraphQLList(ItemsType),
    resolve: getItems,
  }
};

export const itemsMutations = {
  saveItem: {
    type: ItemsType,
    resolve: saveItems,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ItemsInput',
          fields: {
            pedido_id: {
              type: GraphQLInt,
            },
            produto_id: {
              type: GraphQLInt,
            },
            preco: {
              type: GraphQLFloat,
            },
            quantidade: {
              type: GraphQLInt,
            },
            total: {
              type: GraphQLFloat,
            },
          }
        })
      }
    }
  }
}