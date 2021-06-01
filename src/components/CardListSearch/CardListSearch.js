import React from 'react';
import './CardListSearch.scss';
import Card from '../Card/Card';

const CardListSearch = ({ data, title }) => {
  console.log("AbajoEmpieza");
  console.log(data);
  return (
    <div className="card--list">
      <h1>{title}</h1>
      <div className="card--list-container">
        <ul>
          {data ?
            data.map(item => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name || item.title}
                  poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path || 'https://image.tmdb.org/t/p/w370' + item.profile_path}
                  rating={item.vote_average}
/*                 mediatype={item.media_type ? item.media_type : mediatype}
 */              />
              )
            })
            : null
          }
        </ul>
      </div>
    </div>
  );
}

export default CardListSearch;
