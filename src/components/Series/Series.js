import React from 'react';
import { useEffect, useState } from 'react';
import './Series.scss';
import CardList from '../CardList/CardList';
import { getElements } from '../../services/services';


const Series = () => {

    const [dataSeries, setDataSeries] = useState([]);

    useEffect(() => {

        getElements("trending", "tv").then(data => setDataSeries(data.results.slice(0, 5)));

    }, [])

    console.log('dataSeries', dataSeries);
    return (
        <main className="main-container">
            {/*  Aca van la cardlist de pelis y la de series */}
            <CardList title={'Peliculas populares'} data={dataSeries}>
            </CardList>

            <CardList title={'Peliculas con mejores Criticas'} data={dataSeries}>
            </CardList>

            <CardList title={'Peliculas a estrenarse'} data={dataSeries}>
            </CardList>

            <CardList title={'Peliculas en cine'} data={dataSeries}>
            </CardList>
        </main>
    )
}

export default Series;



// MOVIES!!!

// const moviesClassification = ["top_rated", "popular", "upcoming"];

// moviesClassification.map(classification => {
//   getElements("movies", classification)
//   <Cadrlihg>
//     slide.data.map(card => {

//     })
//   </Cadrlihg>
// })