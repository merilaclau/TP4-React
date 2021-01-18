import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';

export const getSearchResults = async (inputValue) => {
    try {
        const res = await axios.get(baseUrl + `search/multi?api_key=c109fe29d552e543e892f6c6ec7a140c&language=en-US&query=${inputValue}&page=1&include_adult=false`);
        return res.data;
    }catch(err) {
        throw new Error(`Error getting search results: ${err}`);
    }
}
