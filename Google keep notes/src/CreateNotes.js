import React, { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const CreateNotes = (props) => {
  const [prev, final] = useState({
    title: "",
    content: "",
  });
  const [expand, noExpand] = useState(false);
  const addHere = () => {
    props.pass(prev);
    final({
      title: "",
      content: "",
    });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    final((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleShow = () => {
    noExpand(true);
  };
  const handleShowTwo = () => {
    noExpand(false);
  };
  return (
    <div className="forms mt-3 mb-5" onDoubleClick={handleShowTwo}>
      {expand ? (
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
          variant="standard"
          name="title"
          value={prev.title}
          onChange={handleChange}
        />
      ) : null}
      <TextField
        id="standard-multiline-static"
        label="Type something"
        multiline
        rows={3}
        variant="standard"
        name="content"
        value={prev.content}
        onClick={handleShow}
        onChange={handleChange}
      />
      {expand ? (
        <Button variant="text" className="button" onClick={addHere}>
          <AddIcon />
        </Button>
      ) : null}
    </div>
  );
};
export default CreateNotes;
