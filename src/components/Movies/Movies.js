import React from 'react';
import { useEffect, useState } from 'react';
import './Movies.scss';
import CardList from '../CardList/CardList';
import { getElements } from '../../services/services';


const Movies = () => {

    const [dataMovies, setDataMovies] = useState([]);

    useEffect(() => {

        getElements("popular", "movie").then(data => setDataMovies(data.results.slice(0, 5)));

    }, [])

    console.log('dataMovies', dataMovies);

    return (
        <main className="main-container">
            {/*  Aca van la cardlist de pelis y la de series */}
            <CardList title={'Peliculas populares'} data={dataMovies}>
            </CardList>

            <CardList title={'Peliculas con mejores Criticas'} data={dataMovies}>
            </CardList>

            <CardList title={'Peliculas a estrenarse'} data={dataMovies}>
            </CardList>

            <CardList title={'Peliculas en cine'} data={dataMovies}>
            </CardList>
        </main>
    )
}

export default Movies;



// MOVIES!!!

// const moviesClassification = ["top_rated", "popular", "upcoming"];

// moviesClassification.map(classification => {
//   getElements("movies", classification)
//   <Cadrlihg>
//     slide.data.map(card => {

//     })
//   </Cadrlihg>
// })