import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from "react-router-dom";
import './InfoPage.scss';
import Poster from '../../Poster/Poster';
import InfoTab from '../../InfoTab/InfoTab';
import Info from '../../Info/Info';
import Episodios from '../../Episodios/Episodios';
import Similar from '../../Similar/Similar';
import axios from 'axios';


const InfoPage = () => {
    const [element, setElement] = useState({})
    const { mediatype, id } = useParams()
    const baseUrl = 'https://api.themoviedb.org/3/';
    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';
    let { url } = useRouteMatch();
    let sectionL = url.split("/")

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
        <main className="main-container">
            <Poster data={element.backdrop_path}></Poster>
            <InfoTab />
            {/*             <Info tituloTv={element.name}
                sinopsis={element.overview}
                presupuesto={element.budget}
                urlImg={element.poster_path}
                titulo={element.original_title}
                genero={element.genres}
                rating={element.vote_average}
                produccion={element.production_companies}
                recaudacion={element.revenue}
                temporadas={element.number_of_seasons}
                episodios={element.number_of_episodes} /> */}
            {sectionL[3] === "info" && < Info tituloTv={element.name}
                sinopsis={element.overview}
                presupuesto={element.budget}
                urlImg={element.poster_path}
                titulo={element.original_title}
                genero={element.genres}
                rating={element.vote_average}
                produccion={element.production_companies}
                recaudacion={element.revenue}
                temporadas={element.number_of_seasons}
                episodios={element.number_of_episodes} />}
            {sectionL[3] === "episodios" && <Episodios />}
            {sectionL[3] === "similar" && <Similar />}
        </main>
    )
}

export default InfoPage;