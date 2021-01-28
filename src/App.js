import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import CardCollectionPage from './components/Pages/CardCollectionPage'
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
        <Route exact path='/movie/:classification/page/:pageNumber' component={CardCollectionPage} />
        <Route exact path='/tv/:classification/page/:pageNumber' component={CardCollectionPage} />
        <Route exact path='/multi/:query/page/:pageNumber' component={CardCollectionPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
