import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const App = () => {
  const [data, actualData] = useState([]);

  const Check = async () => {
    let a = await fetch(
      "https://data.covid19india.org/v4/min/timeseries.min.json"
    );
    let b = await a.json();
    const result = Object.entries(b).map(([name, values]) => ({
      name,
      ...values,
    })); // converting into array so as to apply map function
    // console.log(b)
    actualData(result);
    // console.log(result);
  };
  useEffect(() => {
    Check();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Covid 19 tracker</h1>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>States</TableCell>
              <TableCell align="right">Confirmed Cases</TableCell>
              <TableCell align="right">Deceased</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Tested</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((prev, index) => {
              if (index === 34) {
                return <></>;
              } //no data for index == 34 in json
              else {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {prev.name}
                    </TableCell>
                    <TableCell align="right">
                      {prev.dates["2021-10-31"].total.confirmed}
                    </TableCell>
                    <TableCell align="right">
                      {prev.dates["2021-10-31"].total.deceased}
                    </TableCell>
                    <TableCell align="right">
                      {prev.dates["2021-10-31"].total.recovered}
                    </TableCell>
                    <TableCell align="right">
                      {prev.dates["2021-10-31"].total.tested}
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default App;
