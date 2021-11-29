const {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

const ClientType = require('./types/ClientType');
const { getClients, saveClient } = require('./ClientLoader');

const clientQueries = {
  clientes: {
    type: new GraphQLList(ClientType),
    resolve: getClients,
    args: {
      id: {
        type: GraphQLInt,
      },
    }
  }
};

const clientMutations = {
  saveClient: {
    type: ClientType,
    resolve: saveClient,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ClientInput',
          fields: {
            nome: {
              type: GraphQLString,
            },
            email: {
              type: GraphQLString,
            },
            cpf: {
              type: GraphQLString,
            },
            data_nascimento: {
              type: GraphQLDate,
            },
            rua: {
              type: GraphQLString,
            },
            bairro: {
              type: GraphQLString,
            },
            cidade: {
              type: GraphQLString,
            },
            estado: {
              type: GraphQLString,
            },
            pais: {
              type: GraphQLString,
            },
            cep: {
              type: GraphQLString,
            },
            numero: {
              type: GraphQLInt,
            },
          }
        })
      }
    }
  }
}

module.exports = { clientQueries, clientMutations };