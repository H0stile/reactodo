import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Apply to front end job offers",
    "Like posts on Linkedin",
    "Learn React",
    "Get some projects done",
    "Go to the gym every two days",
  ]); // useState = hook, initialised with empty array - used to get a short term memory of the todos

  const [input, setInput] = useState([""]);

  //console.log(input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("its working");
    setTodos([...todos, input]);
    setInput(""); // Reinitialise the input field to blank
  };

  return (
    <div className="App">
      <h1>Reactodo</h1>
      <form action="">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add ToDo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
