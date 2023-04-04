import React from "react";
import { useState } from "react";
import "./index.css";
import CreateNotes from "./CreateNotes.js";
import Notes from "./Notes.js";
export const App = () => {
  const [items, newItems] = useState([]);
  const add = (prev) => {
    console.log("i am clicked");
    newItems((prevv) => {
      return [...prevv, prev];
    });
  };
  const deletee = (id) => {
    newItems((prev) => {
      return prev.filter((val, index) => {
        return id !== index;
      });
    });
  };
  return (
    <>
      <div className="header bg-warning p-2">
        <img
          style={{ height: "70px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png"
          alt="keep notes logo"
        />
        <h1 style={{ display: "inline" }}>Google keep notes</h1>
      </div>
      <CreateNotes pass={add} />

      <div className="notes">
        {items.map((val, index) => {
          return (
            <Notes
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              fun={deletee}
            />
          );
        })}
      </div>
    </>
  );
};
