import React from 'react';
import './Poster.scss';

const Poster = ({ data }) => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';
    return (
        <div className="container-hero">
            <div className="shadow">
                <div className="hero" style={{ backgroundImage: `url(${baseUrl}/original/${data})` }} ></div>
            </div>
        </div>
    )
}
export default Poster;