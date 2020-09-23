import React from "react";
import "./Todo.css";
import db from "./firebase";
import { Button } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ImgIcon,
} from "@material-ui/core";

// All component files must be named starting by capital letter

function Todo(props) {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="deadline: " />{" "}
          {/* First todo is the object, second is the "todo" field in the doc */}
        </ListItem>
        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        >
          DELETE
        </Button>
      </List>
    </div>
  );
}

export default Todo;
