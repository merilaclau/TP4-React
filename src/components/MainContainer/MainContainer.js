import React from 'react';
import { useEffect, useState } from 'react';
import './MainContainer.scss';
import CardList from '../CardList/CardList';
import { getElements } from '../../services/services';


const MainContainer = () => {

    const [dataMovies, setDataMovies] = useState([]);
    const [dataSeries, setDataSeries] = useState([]);

    useEffect(() => {

        getElements("trending", "movie").then(data => setDataMovies(data.results.slice(0, 5)));
        getElements("trending", "tv").then(data => setDataSeries(data.results.slice(0, 5)));

    }, [])

    console.log('dataMovies', dataMovies);
    console.log('dataSeries', dataSeries);

    return (
        <main className="main-container">
            {/*  Aca van la cardlist de pelis y la de series */}
            <CardList title={'Peliculas que son tendencia'} data={dataMovies}>
            </CardList>

            <CardList title={'Series que son tendencia'} data={dataSeries}>
            </CardList>
        </main>
    )
}

export default MainContainer;



// MOVIES!!!

// const moviesClassification = ["top_rated", "popular", "upcoming"];

// moviesClassification.map(classification => {
//   getElements("movies", classification)
//   <Cadrlihg>
//     slide.data.map(card => {

//     })
//   </Cadrlihg>
// })