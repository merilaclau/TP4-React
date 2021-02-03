import React from 'react';
import './Poster.scss';

const Poster = ({ data }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return (
        <div className="container-hero">
            <div className="shadow">
                <div className="hero" style={{ backgroundImage: `url(${baseUrl}/original/${data})` }} ></div>
            </div>
        </div>
    )
}
export default Poster;