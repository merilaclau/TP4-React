import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './InfoPage.scss';
import Poster from '../../Poster/Poster';
import InfoTab from '../../InfoTab/InfoTab';
import axios from 'axios';


const InfoPage = () => {
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

    useEffect(async () => {
        getMoviesSeriesInfo(mediatype, id).then(data => setElement(data));
    }, {})

    console.log('Ver que trae de la pelicula')
    console.log(element)
    return (
        <main className="main-container">
            <Poster data={element.backdrop_path}></Poster>
            <InfoTab />

        </main>
    )
}

export default InfoPage;