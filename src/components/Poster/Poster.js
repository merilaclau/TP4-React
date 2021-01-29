import React from 'react';
import './Poster.scss';

const Poster = () => {
    return (
        <div className="container-hero">
            <div className="shadow">
                <div className="hero" style={/* results && results.backdrop_path != null ? */{ backgroundImage: `url("https://image.tmdb.org/t/p/original/srYya1ZlI97Au4jUYAktDe3avyA.jpg")` }/* :{backgroundColor: "rgba(0, 0, 0, 0.5)"} */}></div>
            </div>
        </div>
    )
}
export default Poster;