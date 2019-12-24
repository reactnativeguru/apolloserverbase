const {ApolloServer} = require('apollo-server')

const typeDefs = `
    type Query {
        totalDays : Int
    }
`

const resolvers = {
    Query :{
        totalDays: () => 100
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
.listen()
.then(( {url}) => `GraphQL running on ${url}`)
.then(console.log)
.catch(console.error)