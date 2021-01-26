import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
/* import { getMoviesSeriesInfo } from './services/services'; */
import './Card.scss';

const Card = ({ name, poster_path, rating }) => {

  /*  const [dataSeriesMoviesInfo, setSeriesMoviesInfo] = useState([]);
 
   useEffect(() => {
     getMoviesSeriesInfo("movie", "464052").then(data => setSeriesMoviesInfo(data));
   }, []) */

  return (
    <Link to='/:{mediatype}/:{id}/:info'>
      <article className="card">
        <div className="card--header">
          <div type="button"><img className="card--img" src={poster_path} /></div>
        </div>
        <div className="card--content">
          <h3 className="card--content-title" >
            {name}
          </h3>
          <span className="card--content-rating">
            <FontAwesomeIcon icon={faStar} /> {rating}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default Card;
