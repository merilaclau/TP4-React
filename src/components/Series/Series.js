import React from 'react';
import { useEffect, useState } from 'react';
import './Series.scss';
import CardList from '../CardList/CardList';
import { getMoviesSeries } from '../../services/services';


const Series = () => {

    const [dataPopularSeries, setDataPopularSeries] = useState([]);
    const [dataTopRatedSeries, setDataTopRatedSeries] = useState([]);
    const [dataAiringTodaySeries, setDataAiringTodaySeries] = useState([]);


    useEffect( async() => {
        getMoviesSeries("tv", "popular").then(data => setDataPopularSeries(data.results.slice(0, 5)));
        getMoviesSeries("tv", "top_rated").then(data => setDataTopRatedSeries(data.results.slice(0, 5)));
        getMoviesSeries("tv", "airing_today").then(data => setDataAiringTodaySeries(data.results.slice(0, 5)));
    }, [])

    return (
        <main className="main-container">
            <CardList title={'Series populares'} data={dataPopularSeries}>
            </CardList>

            <CardList title={'Series con mejores Criticas'} data={dataTopRatedSeries}>
            </CardList>

            <CardList title={'Series en el aire'} data={dataAiringTodaySeries}>
            </CardList>
        </main>
    )
}

export default Series;
