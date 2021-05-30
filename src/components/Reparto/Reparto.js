import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Reparto.scss';
import CardList from '../CardList/CardList';
import axios from 'axios'


const Reparto = () => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const { mediatype, id } = useParams();
    const [reparto, setReparto] = useState([])

    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';

    const getCreditsMoviesSeriesInfo = async (mediatype, id) => {
        try {
            const res = await axios.get(baseUrl + `${mediatype}/${id}/credits?api_key=${apiKey}&language=en-US`);
            return res.data

        } catch (err) {
            throw new Error(`Error getting movies or series: ${err}`);
        }
    }
    useEffect(() => {
        getCreditsMoviesSeriesInfo(mediatype, id).then(data => setReparto(data.cast));
    }, [])

    console.log('Ver que trae REPARTO')
    console.log(reparto)

    return (
        <div>
            {reparto && <CardList data={reparto} mediatype={mediatype} />}
        </div>
    )
}

/*     return (
        <div className="card--list">
            <div className="card--list-container">
                {
                    similar.map(item => {
                        console.log(similar)
                        return (
                            <Card
                                id={item.id}
                                key={item.id}
                                name={item.name || item.title}
                                poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path}
                                mediatype={mediatype}
                            /*  pathname={item.pathname} 
                            />
                        )
                    })
                }
            </div>
        </div>
    ); 
}*/

export default Reparto;