import React from "react";
import '../styles/App.css';
import Form from "./Form";
import List from "./List";


const App = () => {
  return (
    <div id="main">
      <header>Bicycle Repair App</header>
      <Form />
      <hr></hr>
      <List />
    </div>
  )
}


export default App;
