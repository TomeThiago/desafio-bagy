import { 
  GraphQLObjectType, 
  GraphQLNonNull, 
  GraphQLString, 
  GraphQLInt,
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'ClientType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cpf: {
      type: new GraphQLNonNull(GraphQLString)
    },
    data_nascimento: {
      type: new GraphQLNonNull(GraphQLDate)
    },
    rua: {
      type: new GraphQLNonNull(GraphQLString)
    },
    bairro: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cidade: {
      type: new GraphQLNonNull(GraphQLString)
    },
    estado: {
      type: new GraphQLNonNull(GraphQLString)
    },
    pais: {
      type: new GraphQLNonNull(GraphQLString)
    },
    cep: {
      type: new GraphQLNonNull(GraphQLString)
    },
    numero: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  }
});