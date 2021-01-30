import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import ButtonAppBar from "./components/buttonappbar";
import UsernameField from "./components/usernamefield";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <ButtonAppBar />
        </div>
      );
    } else {
      return (
        <div className="App">
          <ButtonAppBar />
          <UsernameField />
        </div>
      );
    }
  }
}

export default App;
