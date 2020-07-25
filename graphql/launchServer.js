const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const models = require("./models");
const { ApolloServer, gql } = require("apollo-server");

const launchServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
    playground: false,
  });

  server.listen({ port: 49125 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

module.exports = launchServer;
