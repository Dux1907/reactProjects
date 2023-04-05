import "./index.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function App() {
  let b;
  let [info, actualInfo] = useState({});
  const [count, newCount] = useState();
  const [show, notShow] = useState(false);

  const handleChange = (e) => {
    newCount(e.target.value);
  };
  const Api = async (count) => {
    try {
      let a = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`);
      b = await a.json();
      actualInfo(b);
      notShow(true);
     // console.log(b);
    } catch (error) {
      console.log(error);
      notShow(false);
    }
  };
  const handleClick = () => {
    Api(count);
  };

  return (
    <>
      <TextField
        style={{ minWidth: "300px", margin: "10px" }}
        id="filled-basic"
        label="Enter value from 1 to 1010"
        variant="filled"
        onChange={handleChange}
      />
      <Button onClick={handleClick} variant="contained">
        Get Pokemon
      </Button>
      <br></br>
      {show && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pokemon</th>
              <th scope="col">Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Id</th>
              <td>{`${info.id}`}</td>
            </tr>
            <tr>
              <th scope="row">Name</th>
              <td>{`${info.name}`}</td>
            </tr>
            <tr>
              <th scope="row">Moves</th>
              <td>{`${Object.keys(info.moves).length}`}</td>
            </tr>
            <tr>
              <th scope="row">Height</th>
              <td>{`${info.height}`}</td>
            </tr>
            <tr>
              <th scope="row">Weight</th>
              <td>{`${info.weight}`}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}
