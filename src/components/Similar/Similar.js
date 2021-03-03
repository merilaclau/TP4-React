import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Similar.scss';
import Card from '../Card/Card';
import axios from 'axios'


const Similar = () => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const { mediatype, id } = useParams();
    const [similar, setSimilar] = useState([])
    const [page, setPage] = useState(1)

    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';

    const getSimilarMoviesSeriesInfo = async (mediatype, id) => {
        try {
            const res = await axios.get(baseUrl + `${mediatype}/${id}/recommendations?api_key=${apiKey}&language=en-US&page`);
            return res.data

        } catch (err) {
            throw new Error(`Error getting movies or series: ${err}`);
        }
    }
    useEffect(() => {
        getSimilarMoviesSeriesInfo(mediatype, id).then(data => setSimilar(data.results));
    }, [])

    console.log('Ver que trae similares')
    console.log(similar)

    return (
        <div className="card--list">
            <div className="card--list-container">
                {
                    similar.map(item => {
                        console.log(similar)
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name || item.title}
                                poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Similar;