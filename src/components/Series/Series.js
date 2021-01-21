import React from 'react';
import { useEffect, useState } from 'react';
import './Series.scss';
import CardList from '../CardList/CardList';
import { getElementsTopSeries, getElementsSeries } from '../../services/services';


const Series = () => {

    const [dataPopularSeries, setDataPopularSeries] = useState([]);///popular
    const [dataTopSeries, setDataTopSeries] = useState([]);///popular


    useEffect(() => {

        getElementsSeries("tv", "popular").then(data => setDataPopularSeries(data.results.slice(0, 5)));
        getElementsTopSeries("tv", "top_rated").then(data => setDataTopSeries(data.results.slice(0, 5)));

    }, [])

    console.log('dataPopularSeries', dataPopularSeries);
    return (
        <main className="main-container">
            {/*  Aca van la cardlist de pelis y la de series */}
            <CardList title={'Series populares'} data={dataPopularSeries}>
            </CardList>

            <CardList title={'Series con mejores Criticas'} data={dataTopSeries}>
            </CardList>

            <CardList title={'Series al aire'} data={dataPopularSeries}>
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