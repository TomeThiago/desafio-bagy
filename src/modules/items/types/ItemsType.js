import { 
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
} from "graphql";

export default new GraphQLObjectType({
  name: 'ItemsType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    pedido_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    produto_id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    preco: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    quantidade: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    total: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  }
});