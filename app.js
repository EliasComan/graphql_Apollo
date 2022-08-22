import { ApolloServer } from "apollo-server-express"
import { connectDB } from "./db.js"
import  express from "express"
import { resolvers } from "./resolver.js"
import { typeDefs } from "./typesDefs.js"

const app = express()

const ServerApollo = new ApolloServer({
    typeDefs,
    resolvers
})
await ServerApollo.start()
ServerApollo.applyMiddleware({app})
connectDB()
app.use('*', (req, res) => res.status(404).send('NotFound'))

app.listen(3000)