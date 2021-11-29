const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

module.exports = new GraphQLObjectType({
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