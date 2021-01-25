import React from 'react';
/* import { useEffect, useState } from 'react'; */
import './InfoPage.scss';
import Poster from '../Poster/Poster';
import MovieNav from '../MovieNav/MovieNav';




/* import { getTrendingElements } from '../../services/services'; */


const InfoPage = () => {

    /*   useEffect(() => {
  
          getTrendingElements("trending", "movie").then(data => setDataMovies(data.results.slice(0, 5)));
          getTrendingElements("trending", "tv").then(data => setDataSeries(data.results.slice(0, 5)));
  
      }, [])
  
      console.log('dataMovies', dataMovies);
      console.log('dataSeries', dataSeries); */

    return (
        <main className="main-container">
            <Poster></Poster>
            <MovieNav />

        </main>
    )
}

export default InfoPage;



// MOVIES!!!

// const moviesClassification = ["top_rated", "popular", "upcoming"];

// moviesClassification.map(classification => {
//   getElements("movies", classification)
//   <Cadrlihg>
//     slide.data.map(card => {

//     })
//   </Cadrlihg>
// })