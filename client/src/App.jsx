import React from "react";
import ReactDOM from "react-dom";
//Shards UI kit for react:
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";
import Chat from './Chat'

const App = () => <Chat />

ReactDOM.render(<App />, document.getElementById("app"));
