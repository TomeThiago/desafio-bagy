import { 
  GraphQLFloat, 
  GraphQLList, 
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType, 
} from "graphql";

import ProductType from "./types/ProductType";
import { getProducts, saveProduct } from "./ProductLoader";

export const productQueries = {
  produtos: {
    type: new GraphQLList(ProductType),
    resolve: getProducts,
  }
};

export const productMutations = {
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