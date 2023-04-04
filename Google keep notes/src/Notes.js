import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const Notes = (props) => {
  // console.log({props.title})
  const del = () => {
    props.fun(props.id);
  };
  return (
    <div
      className="individual p-3"
      style={{ maxWidth: "300px", position: "relative" }}
    >
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <Button variant="text" onClick={del}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Notes;
