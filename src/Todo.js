import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ImgIcon,
  Modal,
} from "@material-ui/core";

// All component files must be named starting by capital letter

function Todo(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>Test</h1>
          <button onClick={(e) => setOpen(false)}></button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="deadline: " />{" "}
          {/* First todo is the object, second is the "todo" field in the doc */}
        </ListItem>
        <button onClick={(e) => setOpen(true)}>EDIT</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </div>
  );
}

export default Todo;
