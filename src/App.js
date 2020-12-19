import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Home from './component/Public/Home';

import './App.css';
import { Helmet } from 'react-helmet';
import Thread from './component/Post/Thread';

function App() {
  const [_userToken, setToken] = useState('');
  const [_userID, setID] = useState('');
  const _session = {
    token: _userToken,
    id: _userID,
    tokenHandler: setToken,
    idHandler: setID
  }
  return (
    <>
      <Helmet>
        <title>NHC Forum</title>
      </Helmet>
      <BrowserRouter basename='nhc-forum'>
        <Switch>
          <Route path = "/thread"                         render    = {(props) => <Thread {...props} session={_session}/>} />
          <Route path = "/login"                          component = {() => {return (<Login session={_session}/>)}} />
          <Route path = "/register"                       component = {() => {return (<Register session={_session}/>)}} />
          <Route path = "/"                               component = {() => {return (<Home session={_session}/>)}} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
