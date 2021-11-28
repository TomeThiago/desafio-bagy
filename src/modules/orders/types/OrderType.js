import { 
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { GraphQLDate } from 'graphql-iso-date';

import ItemsType from '../../items/types/ItemsType';

export default new GraphQLObjectType({
  name: 'OrderType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    data_criacao: {
      type: new GraphQLNonNull(GraphQLDate)
    },
    parcelas: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    cliente_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    total: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    status: {
      type: new GraphQLNonNull(GraphQLString),
    },
    itens: { 
      type: new GraphQLList(ItemsType) 
    }
  },
});