import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import MainContainer from './components/MainContainer/MainContainer';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/movie' component={Movies} />
        <Route exact path='/tv' component={Series} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
