import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // useState = hook, initialised with empty array - used to get a short term memory of the todos
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input />
      <button>Add ToDo</button>

      <ul>
        <li>Apply to front end job offers</li>
        <li>Like posts on Linkedin</li>
        <li>Learn React</li>
        <li>Get some projects done</li>
      </ul>
    </div>
  );
}

export default App;
