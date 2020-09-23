import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]); // useState = hook, initialised with empty array - used to get a short term memory of the todos

  const [input, setInput] = useState([""]);

  //console.log(input);

  // Listen to the db and fetch the tasks

  useEffect(() => {
    // Will fire everytime the page is loaded
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    //  console.log("its working");
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput(""); // Reinitialise the input field to blank
  };

  return (
    <div className="App">
      <h1>Reactodo</h1>

      <form action="">
        <FormControl>
          <InputLabel>Add a task</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disabled={!input}
          type="submit"
          onClick={addTodo}
        >
          Add ToDo
        </Button>

        {/* disabled when no input value */}
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
