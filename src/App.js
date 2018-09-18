import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar";
import Content from "./Content"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
    <div className="full-page"> 
        <NavBar/>
        {/* <Switch> */}
          {/* <Route exact path={"/"} component={App}> </Route> */}
          <Route path={"/:slug"} render={(props) => <Content {...props} /> } />
        {/* </Switch> */}
    </div>
    );
  }
}

export default App;