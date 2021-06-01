import React, { useState, useEffect } from 'react';
import './SearchInput.scss';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const [data, setData] = useState([]);

  const getData = async (inputValue) => {

    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=c109fe29d552e543e892f6c6ec7a140c&query=${inputValue}&page=1`);
      setData(res.data.results);
      console.log(res.data);
    }
    catch (err) {
      alert(`Error getting data ${err}`);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (inputValue.length > 0) {
        getData(inputValue)
      }
    }, 1500) //revisar tema token de timeout para evitar multiples llamadas a la API
  }, [inputValue])
  console.log("inputValue data");
  console.log(data);
  return (

    <>
      <div className="search-container">
        <Link className="header-menu-button" to={{ pathname: `/searchResults` }} activeStyle={{ color: "#2296F3" }}><FontAwesomeIcon icon={faSearch} /></Link>
        <input className="search-container-input"
          className="searchInput"
          type="text"
          name="searchInput"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Búsqueda..." />
      </div>
    </>
  );
}

export default SearchInput;
