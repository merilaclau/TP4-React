import React, { useState, useEffect } from 'react';
import './SearchInput.scss';
import axios from 'axios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  
  const [data, setData] = useState([]);

  const getData = async (inputValue) => {
    
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/keyword?api_key=c109fe29d552e543e892f6c6ec7a140c&query=${inputValue}&page=1`);
      setData(res.data.results);
      //console.log(res.data); este console log sirve para ver cuantas páginas tiene el query
    }
    catch(err) {
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
  
  return (
    <div>
      <input 
        className="searchInput"  
        type="text" 
        name="searchInput"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} >
      </input>
      <ul>
        {data.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>   
    </div>
    /*<section className="search-container">
      <button className="search-container-button"><FontAwesomeIcon icon={faSearch} /></button>
      <input className="search-container-input" placeholder="Búsqueda..." />
    </section>*/
  );
}

export default SearchInput;
