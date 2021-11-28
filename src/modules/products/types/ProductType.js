import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLObjectType({
  name: 'ProductType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    },
    imagem: {
      type: new GraphQLNonNull(GraphQLString),
    },
    descricao: {
      type: new GraphQLNonNull(GraphQLString),
    },
    peso: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    preco: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    quantidade: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }
});