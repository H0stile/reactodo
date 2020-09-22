import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Apply to front end job offers",
    "Like posts on Linkedin",
    "Learn React",
    "Get some projects done",
  ]); // useState = hook, initialised with empty array - used to get a short term memory of the todos
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input />
      <button>Add ToDo</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
