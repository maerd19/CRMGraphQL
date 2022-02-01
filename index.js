const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolver')

// servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Arrancar el servidor
server.listen().then(({url}) => {
    console.log(`Servidor listo en la URL ${url}`);
})