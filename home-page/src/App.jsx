import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
//Shards UI kit for react:
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

// import Chat from 'chat/Chat'

const App = () => (
  <Container>
    <h1>Welcome to CatFlix!</h1>
    <div>
      <p>A place where all cat lovers can delight themselves! </p>
      <img
        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        alt="cat"
        width="40%"
      />
       {/* <Chat /> */}
    </div>
   
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
