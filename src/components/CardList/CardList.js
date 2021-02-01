import React from 'react';
import './CardList.scss';
import Card from '../Card/Card';

function CardList({ title, data, mediatype }) {
  console.log("AbajoEmpieza");
  console.log(data);
  return (
    <div className="card--list">
      <h1>{title}</h1>
      <div className="card--list-container">
        {
          data.map(item => {

            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.name || item.title}
                poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path}
                rating={item.vote_average}
                mediatype={item.media_type ? item.media_type : mediatype}

              />
            )
          })
        }
      </div>
    </div>
  );
}

export default CardList;
