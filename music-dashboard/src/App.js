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
import Switches from "./components/switches";
import Slider from "./components/slider";
import ControlledOpenSelect from "./components/quality";

import React, { Component } from "react";

class App extends Component {
  state = {
    loggedIn: false,
    toggle: false,
    quality: false,
    slider: false,
  };
  changeState = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
    console.log(this.state.loggedIn);
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <ButtonAppBar />
          <Switches />
          <Slider />
          <ControlledOpenSelect />
        </div>
      );
    } else {
      return (
        <div className="App">
          <ButtonAppBar />
          <UsernameField />
          <button onClick={this.changeState}>LOGIN</button>
        </div>
      );
    }
  }
}

export default App;
