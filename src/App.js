import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
<<<<<<< HEAD
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import CardCollectionPage from './components/Pages/CardCollectionPage'
import MainContainer from './components/MainContainer/MainContainer';
=======
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import MainContainer from './components/Pages/MainContainer/MainContainer';
>>>>>>> main
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/movie' component={Movies} />
        <Route exact path='/tv' component={Series} />
        <Route exact path='/movie/:classification/page/:pageNumber' render={(props) => (<CardCollectionPage {...props} mediatype={'movie'} />)} />
        <Route exact path='/tv/:classification/page/:pageNumber' render={(props) => (<CardCollectionPage {...props} mediatype={'tv'} />)} />
        <Route exact path='/multi/:query/page/:pageNumber' render={(props) => (<CardCollectionPage {...props} mediatype={'multi'} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
