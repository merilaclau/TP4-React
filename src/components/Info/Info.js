import React from 'react'
/* import VoteStars from './VoteStars' */
import { useParams } from 'react-router-dom'
import './Info.scss';




const Info = ({ sinopsis, temporadas, episodios, tituloTv, rating, produccion, urlImg, presupuesto,
    titulo, genero, recaudacion }) => {

    const baseUrl = 'https://image.tmdb.org/t/p/w342';
    const { mediatype } = useParams();

    return (
        <div className="InfoTab-container">
            <img className="InfoTab-img" src={`${baseUrl}/${urlImg}`} />
            <div className="InfoTab-item">
                {mediatype == "tv" ?
                    <>
                        <h1 className="item-title">{tituloTv} </h1>
                    </>
                    :
                    <>
                        <h1 className="item-title">{titulo} </h1>
                    </>}
                <p>SINOPSIS: {sinopsis}</p>
                {mediatype == "tv" ?
                    <>
                        <p>TEMPORADAS: {temporadas}</p>
                        <p>EPISODIOS: {episodios}</p>
                    </>
                    :
                    <>
                        <p>PRESUPUESTO: {presupuesto}</p>
                        <p>RECAUDACION: {recaudacion}</p>
                    </>
                }
                <p>GENERO: {genero && genero.map((item) => {
                    return (<span>{item.name} - </span>)
                })}</p>
                <p>PRODUCCION: {produccion && produccion.map((item) => {
                    return (<span>{item.name} - </span>
                    )
                })}</p>

            </div>

        </div>
    )
}
export default Info