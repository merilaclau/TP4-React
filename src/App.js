import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import './App.scss';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <MainContainer />
    </React.Fragment>
  );
}

export default App;
