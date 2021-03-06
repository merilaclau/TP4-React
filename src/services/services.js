import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';


//TRENDING
export const getTrendingElements = async (classification, mediatype) => {
    try {
        const res = await axios.get(baseUrl + `${classification}/${mediatype}/day?api_key=${apiKey}`);
        return res.data;
    } catch (err) {
        throw new Error(`Error getting trending elements: ${err}`);
    }
}

//IMPORTANT: unlike trending movies & series, to get other lists of movies and series, invert the order of parameters mediatype and classification
//movie options are "popular" || "top_rated" || "now_playing" || "upcoming"
//tv options are "popular" || "top_rated" || "airing_today"

export const getMoviesSeries = async (mediatype, classification, page = 1) => {
    try {
        const res = await axios.get(baseUrl + `${mediatype}/${classification}?api_key=${apiKey}&language=en-US&page=${page}`);
        return res.data;
    } catch (err) {
        throw new Error(`Error getting movies or series: ${err}`);
    }
}

export const getMoviesSeriesInfo = async (mediatype, id) => {
    try {
        const res = await axios.get(baseUrl + `${mediatype}/${id}?api_key=${apiKey}&language=en-US`);
        return res.data;
    } catch (err) {
        throw new Error(`Error getting movies or series: ${err}`);
    }
}

//SEARCH
export const getSearchResults = async (inputValue, page = 1) => {
    try {
        const res = await axios.get(baseUrl + `search/multi?api_key=${apiKey}&language=en-US&query=${inputValue}&page=${page}&include_adult=false`);
        return res.data;
    } catch (err) {
        throw new Error(`Error getting search results: ${err}`);
    }
}
