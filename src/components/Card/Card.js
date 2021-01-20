import React from 'react';
import './Card.scss';

const Card = ({name, poster_path, rating}) => {
  return (
    <article className = "card">
      <div className = "card--header">
        <img className="card--img" src={poster_path} />   
        <h3 className="card--header-title" >
          {name}
        </h3>  
      </div>
      <div className = "card--content">
        <p>
          {rating}
        </p>
      </div>  
    </article>

  );
}

export default Card;
