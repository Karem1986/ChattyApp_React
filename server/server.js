const { GraphQLServer, PubSub } = require('graphql-yoga')

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

const subscribers = []
const onMessageUpdates = (fk) => subscribers.push(fk)
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
      subscribers.forEach((fk) => fk())
      return id
    }
  },
  Subscription: {
    messages: {
      subscribe:(parent, args, { pubsub }) => {
        const chat = Math.random().toString()
        onMessageUpdates(() => pubsub.publish(chat, {messages}))
        setTimeout(()=> pubsub.publish(chat, { messages }), 0)
        return pubsub.asyncIterator(chat)
      }
    }
  }
} 
const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: {pubsub} })
server.start(({ port }) => {
  console.info(`🚀 Server is running on localhost:${port}/`)
})