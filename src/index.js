import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Content from './Content'

ReactDOM.render
(<BrowserRouter>
    <Switch>
        <Route exact path={"/"} component={App}> </Route>
        <Route path={"/:slug"} render={(props) => <Content {...props} /> } />
    </Switch>
</BrowserRouter>,
 document.getElementById('root'));


