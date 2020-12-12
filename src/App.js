import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Home from './component/Public/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter basename='nhc-forum'>
      <Switch>
        <Route path = "/login"                          component = { Login }/>
        <Route path = "/register"                       component = { Register } />
        <Route path = "/"                               component = { Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
