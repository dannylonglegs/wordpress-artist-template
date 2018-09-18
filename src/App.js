import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import NavBar from "./NavBar";
import Content from "./Content"
import { Switch, Route } from 'react-router-dom'


const siteName = "YadaYada";

class App extends Component {

  render() {
    return (
      <NavBar>
          {this.props.children}
      </NavBar>
    );
  }
}

export default App;
