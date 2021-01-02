import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";
//UI 
import {
  Container
} from 'shards-react'

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql `
query {
  messages {
    id
    content 
    user 
  }
}

`
const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES)
  console.log('data', data)
  if(!data) {
    return null
  }
  return (
    <>
    {data.messages.map(({ id, user: messageUser, content})=> (
      <div 
      style={{
        display: 'flex',
        justifyContent: user === messageUser ? 'flex-end' : 'flex-start',
        paddingBottom: '2em'
      }}
      >
        <div
        style={{
          background: user === messageUser ? '#55bf56' : '#e5e6ea',
          color: user === messageUser ? 'white' : 'black',
          padding: '2em',
          borderRadius: "1em",
          maxWidth: "70%"
        }}
        >
          {content}
        </div>
      </div>
    ))}
    </>
  )
}

const Chat = () => {
  return (
    <Container>
      <Messages user="karem" />
      </Container>
  )
 

}

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
