import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Home from './component/Public/Home';

import './App.css';

function App() {
  var _sessionToken;
  return (
    <BrowserRouter basename='nhc-forum'>
      <Switch>
        <Route path = "/login"                          component = {() => {return (<Login sessionToken={_sessionToken}/>)}}/>
        <Route path = "/register"                       component = {() => {return (<Register sessionToken={_sessionToken}/>)}} />
        <Route path = "/"                               component = {() => {return (<Home sessionToken={_sessionToken}/>)}} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
