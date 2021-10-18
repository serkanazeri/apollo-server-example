const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Player {
    name: String!
    number: Int!
  }

  # Queries
  type Query {
    getAllPlayers: [Player!]!
  }

  # Mutations
  type Mutation {
    createPlayer(name: String!, number: Int!): Player!
  }
`;

module.exports = { typeDefs };
