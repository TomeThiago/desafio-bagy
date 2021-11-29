const {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLFloat,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

const OrderType = require('./types/OrderType');

const { getOrders, saveOrder } = require('./OrderLoader');

const ordersQueries = {
  orders: {
    type: new GraphQLList(OrderType),
    resolve: getOrders,
    args: {
      id: {
        type: GraphQLInt,
      },
    }
  }
};

const ordersMutations = {
  saveOrder: {
    type: OrderType,
    resolve: saveOrder,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'OrderInput',
          fields: {
            data_criacao: {
              type: GraphQLDate,
            },
            parcelas: {
              type: GraphQLInt,
            },
            cliente_id: {
              type: GraphQLInt,
            },
            status: {
              type: GraphQLString,
            },
            itens: {
              type: new GraphQLList(
                new GraphQLInputObjectType({
                  name: 'ItemsOrder',
                  fields: {
                    pedido_id: {
                      type: GraphQLInt
                    },
                    produto_id: {
                      type: GraphQLInt
                    },
                    preco: {
                      type: GraphQLFloat
                    },
                    quantidade: {
                      type: GraphQLInt
                    },
                  }
                }),
              ),
            }
          }
        })
      }
    }
  }
}

module.exports = { ordersQueries, ordersMutations };