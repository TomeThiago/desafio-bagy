import { 
  GraphQLString,
  GraphQLInt,
  GraphQLList, 
  GraphQLInputObjectType,  
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';

import ClientType from './types/ClientType';
import { getClients, saveClient } from './ClientLoader';

export const clientQueries = {
  clientes: {
    type: new GraphQLList(ClientType),
    resolve: getClients,
  }
};

export const clientMutations = {
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