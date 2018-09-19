import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar";
import Content from "./Content"
import { Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
    <div className="full-page"> 
        <NavBar/>
          <Route path={"/:slug"} render={(props) => <Content {...props} /> } />
    </div>
    );
  }
}

export default App;