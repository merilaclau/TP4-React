import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
/* import { getMoviesSeriesInfo } from './services/services'; */
import './Card.scss';

const Card = (data) => {

  /*  const [dataSeriesMoviesInfo, setSeriesMoviesInfo] = useState([]);
 
   useEffect(() => {
     getMoviesSeriesInfo("movie", "464052").then(data => setSeriesMoviesInfo(data));
   }, []) */

  return (
    <Link
      to={{
        pathname: `/${data.mediatype}/${data.id}`
      }}>
      <article className="card">
        <div className="card--header">
          <div type="button"><img className="card--img" src={data.poster_path} /></div>
        </div>
        <div className="card--content">
          <h3 className="card--content-title" >
            {data.name}
          </h3>
          <span className="card--content-rating">
            <FontAwesomeIcon icon={faStar} /> {data.rating}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default Card;
