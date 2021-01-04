const { GraphQLServer } = require('graphql-yoga')

const messages = []

const typeDefs = `

type Message {
  id: ID!
  user: String!
  content: String!
}

type Query {
  messages: [Message!]
}

type Mutation {
  createMessage(user: String!, content: String!): ID!
}
type Subscription {
  messages: [Message!]
}

`;
const resolvers = {
  Query: {
    messages: () => messages,
  
  },

  Mutation: {
    createMessage: (parent, {user, content}) => {
      const id = messages.length
      messages.push({
        id,
        user,
        content
      })
      return id
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers})
server.start(({ port }) => {
  console.info(`🚀 Server is running on localhost:${port}/`)
})