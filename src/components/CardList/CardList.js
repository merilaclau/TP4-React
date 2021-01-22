import React from 'react';
import './CardList.scss';
import Card from '../Card/Card';

function CardList({title, data}) {

  return (
    <div className="card--list">
      <h1>{title}</h1>   
      <div className="card--list-container">
        {
        data.map(item => {
         return(
          <Card 
            key={item.id}
            name={item.name || item.title} 
            poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path} 
            rating={item.vote_average}/>
          )
        })
        }
      </div>
    </div>
  );
}

export default CardList;
