import React from "react";
import "./Todo.css";
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
          <ListItemText primary={props.text} secondary="deadline: " />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
