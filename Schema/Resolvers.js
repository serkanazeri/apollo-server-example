const { players } = require("../Data");

const resolvers = {
  Query: {
    getAllPlayers() {
      return players;
    },
  },

  Mutation: {
    createPlayer(parent, args) {
      const newPlayer = args;
      players.push(newPlayer);
      return newPlayer;
    },
  },
};

module.exports = { resolvers };
