import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import "./App.css";

const languages = ["English", "Hindi", "Spanish", "French", "Portugeese"];

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [language, setLanguage] = useState("English");
  const [state, setState] = useState({
    yes: false,
    no: false,
    other: false,
  });
  const [disable, setDisable] = useState(true);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleChecked = (event) => {
    setState({ [event.target.name]: event.target.checked });
  };

  //  Object destructurring
  const { yes, no, other } = state;

  // Prevent refresh
  window.onbeforeunload = function () {
    return "Changes you made may not be saved.";
  };
  useEffect(() => {
    if (name !== "" && age !== undefined) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  });

  return (
    <div className="App">
      <h1>Signup Form</h1>

      <form noValidate autoComplete="off" className="form">
        <TextField
          label="Enter your name..."
          variant="filled"
          className="input-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Enter your age..."
          variant="filled"
          className="input-box"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          variant="filled"
          select
          label="Select"
          value={language}
          onChange={handleChange}
          helperText="Please select your language"
          className="input-box"
        >
          {languages.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <FormControl component="fieldset" className="input-box">
          <FormLabel component="legend">Married</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={yes}
                  onChange={handleChecked}
                  name="yes"
                  color="primary"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={no}
                  onChange={handleChecked}
                  name="no"
                  color="primary"
                />
              }
              label="No"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={other}
                  onChange={handleChecked}
                  name="other"
                  color="primary"
                />
              }
              label="Prefer no to say"
            />
          </FormGroup>
        </FormControl>
        <Button
          disabled={disable}
          variant="contained"
          color="primary"
          size="medium"
          endIcon={<SaveIcon />}
          className="save-btn"
          onClick={() => alert("Data saved")}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default App;
