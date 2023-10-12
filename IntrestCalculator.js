import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { List, ListItem, ListItemText } from "@mui/material";
export default function Intrestcalculator() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(12);
  const [time, setTime] = useState(1);
  const [totalintrest, setTotalintrest] = useState(0);
  const [totalamount, setTotalamount] = useState(0);
  const [timeFrame, setTimeFrame] = useState("month");
  const selectHandler = (event) => {
    setTimeFrame(event.target.value);
  };

  const calculateHandler = () => {
    const currentTime = timeFrame === "year" ? time * 12 : time;
    const intrest = principal * rate * currentTime;
    setTotalintrest(intrest / 100);
    setTotalamount(intrest / 100 + principal);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper
          elevation={2}
          style={{
            margin: 80,
            width: 500,
            hight: 300,
            borderRadius: 5,
            background: "white",
            padding: 20,
          }}
        >
          <Grid container style={{ marginTop: 50 }}>
            <Grid item xs={6}>
              <FormControl variant="standard">
                <label style={{ paddingRight: 150 }}>Principal:</label>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  onChange={(event) => setPrincipal(Number(event.target.value))}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="standard">
                <label style={{ paddingRight: 150 }}>Rate:</label>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  onChange={(event) => setRate(Number(event.target.value))}
                  value={rate}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container style={{ paddingLeft: 25, marginTop: 30 }}>
            <Grid item xs={4}>
              <FormControl variant="standard">
                <label style={{ paddingRight: 150 }}>Time:</label>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  onChange={(event) => setTime(Number(event.target.value))}
                />
              </FormControl>
            </Grid>

            <Grid item xs={8} style={{ paddingRight: 50 }}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple"></InputLabel>
                <Select label="year" onChange={selectHandler} value={timeFrame}>
                  <MenuItem value="year">year</MenuItem>
                  <MenuItem value="month">month</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            style={{
              backgroundColor: "#01e26e",
              marginRight: 50,
              marginTop: 50,
              marginBottom: 20,
            }}
            onClick={calculateHandler}
          >
            Calculate
          </Button>

          <Grid container>
            <List
              sx={{ width: "100%", maxWidth: 460, marginLeft: 1 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              style={{ background: "#00ff7b" }}
            >
              <ListItem>
                <ListItemText id="princepal" primary="Principal Amount :" />
                <p>{principal}</p>
              </ListItem>
              <ListItem>
                <ListItemText id="total" primary="Total Interest :" />
                <p>{totalintrest}</p>
              </ListItem>
              <ListItem>
                <ListItemText id="t amount" primary="Total Amount :" />
                <p>{totalamount}</p>
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6} style={{ marginTop: 150 }}>
        <h2 style={{ color: "white", fontSize: 60 }}>SIMPLE INTEREST</h2>
        <h1 style={{ fontSize: 65 }}>CALCULATOR</h1>
        <h3
          style={{
            background: "white",
            width: 300,
            marginLeft: 200,
            padding: 10,
            fontSize: 40,
          }}
        >
          REACT&JS
        </h3>
      </Grid>
    </Grid>
  );
}
