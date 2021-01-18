import React, { useState, useEffect } from 'react';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../../services/services';
import { getSearchResults } from '../../services/services';

const SearchInput = () => {
  
  const [inputValue, setInputValue] = useState("");
  
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (inputValue.length > 0) {
        getSearchResults(inputValue).then(data => setData(data.results));
      }
     }, 1500) //revisar tema token de timeout para evitar multiples llamadas a la API
  }, [inputValue])

  console.log(data);
  
  return (
    <section className="search-container">
      <button className="search-container-button"><FontAwesomeIcon icon={faSearch} /></button>
      <input 
        className="search-container-input"  
        type="text" 
        name="searchInput"
        placeholder="Búsqueda..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} >
      </input>
    </section>
    /*
    <ul>
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    */
  );
}

export default SearchInput;
