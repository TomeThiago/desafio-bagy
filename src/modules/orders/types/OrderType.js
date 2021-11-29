const {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const { GraphQLDate } = require('graphql-iso-date');

const ItemsType = require('../types/ItemsType');

module.exports = new GraphQLObjectType({
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