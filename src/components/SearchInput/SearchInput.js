import React from 'react';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
  return (
    <section className="search-container">
      <button className="search-container-button"><FontAwesomeIcon icon={faSearch} /></button>
      <input className="search-container-input" placeholder="Búsqueda..." />
    </section>
  );
}

export default SearchInput;
