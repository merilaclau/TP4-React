import React from 'react';
import { useEffect, useState } from 'react';
import './Movies.scss';
import CardList from '../../CardList/CardList';
import { getMoviesSeries } from '../../../services/services';


const Movies = () => {

    const [dataPopularMovies, setDataPopularMovies] = useState([]);
    const [dataTopRatedMovies, setDataTopRatedMovies] = useState([]);
    const [dataUpcomingMovies, setDataUpcomingMovies] = useState([]);
    const [dataNowPlayingMovies, setDataNowPlayingMovies] = useState([]);

    useEffect(async () => {
        getMoviesSeries("movie", "popular").then(data => setDataPopularMovies(data.results.slice(0, 5)));
        getMoviesSeries("movie", "top_rated").then(data => setDataTopRatedMovies(data.results.slice(0, 5)));
        getMoviesSeries("movie", "upcoming").then(data => setDataUpcomingMovies(data.results.slice(0, 5)));
        getMoviesSeries("movie", "now_playing").then(data => setDataNowPlayingMovies(data.results.slice(0, 5)));
    }, [])

    return (
        <main className="main-container">
            <CardList title={'Películas populares'} data={dataPopularMovies}>
            </CardList>

            <CardList title={'Películas con mejores Criticas'} data={dataTopRatedMovies}>
            </CardList>

            <CardList title={'Películas a estrenarse'} data={dataUpcomingMovies}>
            </CardList>

            <CardList title={'Películas en cartelera'} data={dataNowPlayingMovies}>
            </CardList>
        </main>
    )
}

export default Movies;