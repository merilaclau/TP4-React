import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'c109fe29d552e543e892f6c6ec7a140c';

export const getElements = async (classification, mediatype) => {
    try {
        const res = await axios.get(baseUrl + `${classification}/${mediatype}/day?api_key=${apiKey}`);
        return res.data;
    }catch(err) {
        throw new Error(`Error getting trending results: ${err}`);
    }
}

//las opciones posibles de classification son "trending" o "popular" o "top_rated" 
//"now_playing" "upcoming" sólo para movie
// "airing_today" sólo para tv
//las opciones posibles de mediatype son "movie" o "tv"

export const getSearchResults = async (inputValue) => {
    try {
        const res = await axios.get(baseUrl + `search/multi?api_key=${apiKey}&language=en-US&query=${inputValue}&page=1&include_adult=false`);
        return res.data;
    }catch(err) {
        throw new Error(`Error getting search results: ${err}`);
    }
}


/*MOVIES

/*Popular movies (igual a series cambiando media type)
https://api.themoviedb.org/3/movie/popular?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

Mejores críticas (igual a series cambiando media type)
https://api.themoviedb.org/3/movie/top_rated?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

A estrenarse
https://api.themoviedb.org/3/movie/upcoming?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

En cines
https://api.themoviedb.org/3/movie/now_playing?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

=================================

SERIES

Popular series
https://api.themoviedb.org/3/tv/popular?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

Mejores críticas
https://api.themoviedb.org/3/tv/top_rated?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1

Series al aire
https://api.themoviedb.org/3/tv/airing_today?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&page=1
*/
