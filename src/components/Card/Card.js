import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Card.scss';

const Card = (data) => {
  return (
    <article className = "card">
      <div className = "card--header">
        <img className="card--img" src={poster_path} />   
      </div>
      <div className = "card--content">
        <h3 className="card--content-title" >
          {name}
        </h3>  
        <span className="card--content-rating">
        <FontAwesomeIcon icon={faStar} /> {rating}
        </span>
      </div>  
    </article>

  );
}

export default Card;
