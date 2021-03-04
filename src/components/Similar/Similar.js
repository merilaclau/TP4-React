import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Similar.scss';
import CardList from '../CardList/CardList';
import axios from 'axios'


const Similar = () => {
    const baseUrl = 'https://api.themoviedb.org/3/';
    const { mediatype, id } = useParams();
    const [similar, setSimilar] = useState([])

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
        <div>
            {similar && <CardList data={similar} mediatype={mediatype} />}
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

export default Similar;