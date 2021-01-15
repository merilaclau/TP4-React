import React from 'react';
import './NavBar.scss';
import SearchInput from '../SearchInput/SearchInput';
import Menu from '../Menu/Menu';

const NavBar = () => {
  return (
    <header className="navBar-container">
      <section className="navBar">
        <Menu />
        <SearchInput />
      </section>
    </header>
  )
}
export default NavBar;