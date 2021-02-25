import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import MainContainer from './components/Pages/MainContainer/MainContainer';
import InfoPage from './components/Pages/InfoPage/InfoPage';
import Info from './components/Info/Info';
import './App.scss';

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/:mediatype/:id' component={InfoPage} />
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/movie' component={Movies} />
        <Route exact path='/tv' component={Series} />
        <Route exact path='/:mediatype/:id/info' component={InfoPage} />
        <Route exact path='/:mediatype/:id/reparto' component={InfoPage} />
        <Route exact path='/:mediatype/:id/episodios' component={InfoPage} />
        <Route exact path='/:mediatype/:id/similares' component={InfoPage} />
        <Route exact path='/:mediatype/:id/videos' component={InfoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
