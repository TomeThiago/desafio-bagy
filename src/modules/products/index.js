const {
  GraphQLFloat,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
} = require("graphql");

const ProductType = require("./types/ProductType");
const { getProducts, saveProduct } = require("./ProductLoader");

const productQueries = {
  produtos: {
    type: new GraphQLList(ProductType),
    resolve: getProducts,
    args: {
      id: {
        type: GraphQLInt,
      },
    }
  }
};

const productMutations = {
  saveProduct: {
    type: ProductType,
    resolve: saveProduct,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: 'ProductInput',
          fields: {
            nome: {
              type: GraphQLString,
            },
            imagem: {
              type: GraphQLString,
            },
            descricao: {
              type: GraphQLString,
            },
            peso: {
              type: GraphQLFloat,
            },
            preco: {
              type: GraphQLFloat,
            },
            quantidade: {
              type: GraphQLInt,
            },
          }
        })
      }
    }
  }
}

module.exports = { productQueries, productMutations };