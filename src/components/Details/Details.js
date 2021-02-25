import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import './InfoPage.scss';
import Info from '../Info/Info';
import EpisodioTab from '../EpisodioTab/EpisodioTab';
import axios from 'axios';


const Details = () => {
    const [element, setElement] = useState({})
    const { mediatype, id } = useParams()
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';



    const getMoviesSeriesInfo = async (mediatype, id) => {
        try {
            const res = await axios.get(baseUrl + `${mediatype}/${id}?api_key=${apiKey}&language=en-US`);
            return res.data;
        } catch (err) {
            throw new Error(`Error getting movies or series: ${err}`);
        }
    }

    useEffect(() => {
        getMoviesSeriesInfo(mediatype, id).then(data => setElement(data));
    }, [])

    console.log('Ver que trae de la pelicula')
    console.log(element)
    return (
        <BrowserRouter>
            <Switch>
                <NavRoute exactly component={Info} pattern="/:tab">
                    tituloTv = {element.name},
                        sinopsis = {element.overview},
                        presupuesto = {element.budget},
                        urlImg = {element.poster_path},
                        titulo = {element.original_title},
                        genero = {element.genres},
                        rating = {element.vote_average},
                        produccion = {element.production_companies},
                        recaudacion = {element.revenue},
                        temporadas = {element.number_of_seasons},
                        episodios = {element.number_of_episodes}
                </NavRoute>
                <NavRoute exactly component={EpisodioTab} pattern="/:tab">
                </NavRoute>
            </Switch>
        </BrowserRouter>
    )
}

export default Details;