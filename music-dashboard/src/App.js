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
import Switch from "@material-ui/core/Switch";
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

  handleChildren = (x) => {
    const k = Object.keys(x)[0];
    const newState = {};
    newState[k] = x[k];
    this.setState(newState);
  };

  toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <ButtonAppBar />
          <Switch onClick={this.toggle} />
          <Slider parentFunc={this.handleChildren} />
          <ControlledOpenSelect />
          <div>
            {this.state.toggle ? (
              <p>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </p>
            ) : (
              <p></p>
            )}
            {this.state.slider ? (
              <p>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </p>
            ) : (
              <p></p>
            )}
            <p>
              Music quality is degraded. Increase quality if your connection
              allows it.
            </p>
          </div>
          <button onClick={this.changeState}>LOG OUT</button>
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
