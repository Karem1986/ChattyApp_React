import React from "react";
import ReactDOM from "react-dom";
import { Container } from 'shards-react'
import "./index.css";
//Shards UI kit for react:
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
//Chat gets imported here:
import Chat from 'chat/Chat'

const App = () => 
<Container>
<h1>Welcome to CatFlix!</h1>
<div>

  <p>A place where all cat lovers can delight themselves! 
  <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="cat"
      width='100%'
      />
  </p>
</div>

<div>
<h2>Chat with us here:</h2>
<Chat />
</div>

</Container>


ReactDOM.render(<App />, document.getElementById("app"));
