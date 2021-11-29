require('dotenv/config');

const { ApolloServer } = require('apollo-server');

const schema = require('./schema');

const server = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV === "development",
});

module.exports = server;