import React, { useEffect } from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import './Episodios.scss';


const Episodios = () => {
    const { mediatype, id } = useParams();
    const [results, setResults] = useState([])
    const [totalSeason, setTotalSeason] = useState({})
    const [season, setSeason] = useState(1)
    const [temporadasAll, setTemporadasAll] = useState([])
    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';
    const ImgUrl = 'https://image.tmdb.org/t/p/w400//'
    useEffect(() => {
        /*cant de temporadas*/
        Axios
            .get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=${apiKey}`)
            .then(resp => {

                setTotalSeason(resp.data.number_of_seasons)
            })
        /*info por temporada*/
        Axios
            .get(`https://api.themoviedb.org/3/${mediatype}/${id}/season/${season}?api_key=${apiKey}`)
            .then(resp => {
                // ${season} es un numero
                setResults(resp.data)
                console.log("Ver que seasons trae")
                console.log(resp.data)
            })

    }, [season])



    useEffect(() => {
        for (let i = 0; i < totalSeason; i++) {

            let temporadas = `Temporada ${i + 1}`
            temporadasAll.push(temporadas)
        }
    }, [totalSeason])

    const handleClick = (e) => {
        setSeason(e.target.value)
    }



    return (
        <div >
            <div className="seasons">
                <select className="season-select" name="season" id="">
                    {temporadasAll.map((item, i) => {
                        return <option onClick={handleClick} /* key={i} value={i + 1} */>{item}</option>
                    })}
                </select>
            </div>
            <div className="episodes">
                {results.episodes && results.episodes.map((item, i) => {
                    return (<div className="episodes-results" key={i}>
                        <img src={`${ImgUrl}${item.still_path}`} alt="" />
                        <div className="episodes-details">
                            <p> <span>EP{item.episode_number}</span> {item.name}</p>
                            <p className="episode-overview">{item.overview}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Episodios