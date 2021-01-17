import React from 'react';
import NavBar from './components/NavBar/NavBar';
import MainContainer from './components/MainContainer/MainContainer';
import './App.scss';
import SearchInput from './components/SearchInput/SearchInput';

const App = () => {
  return (
    <React.Fragment>
      <NavBar> 
        <SearchInput></SearchInput>
      </NavBar>
      <MainContainer />
    </React.Fragment>
  );
}

export default App;
