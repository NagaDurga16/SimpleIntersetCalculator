import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
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
  const calculateHandler = () => {
    const intrest = principal * rate * time;
    setTotalintrest(intrest / 100);
    setTotalamount(intrest / 100 + principal);
  };
  return (
    <Box
      style={{
        border: "1px solid black",
        width: 500,
        height: 600,
        marginLeft: 400,
      }}
    >
      <h1>Simple Intrest Calculator</h1>
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
            <Select label="year">
              <MenuItem value="year">year</MenuItem>
              <MenuItem value="month">month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        style={{ backgroundColor: "#01e26e", marginRight: 50, marginTop: 50 }}
        onClick={calculateHandler}
      >
        Calculate
      </Button>

      <Grid container>
        <List
          sx={{ width: "100%", maxWidth: 460, marginLeft: 1 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          style={{ background: "#72ffb4" }}
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
    </Box>
  );
}
