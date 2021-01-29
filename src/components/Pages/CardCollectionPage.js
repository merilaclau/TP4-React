import React, { useEffect, useState } from 'react';
import { getMoviesSeriesByPage } from '../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../hooks/usePagination';

//tenemos que pasarle mediatype por props para que las llamadas sean completamente dinámicas
//por ahora queda hardcodeado "movie"

const CardCollectionPage = (props, mediatype) => {

    console.log(props);

    const [data, setData] = useState({});

    let { classification, pageNumber } = useParams();

    useEffect(() => {
        console.log(pageNumber);

        //ACA VA LA LLAMADA A LA API CON PAGE DINAMICA
        getMoviesSeriesByPage("movie", classification, pageNumber).then(data => setData(data));
    }, []);

    console.log(data);
    
    const {pagination, prevPage, nextPage, changePage} = usePagination(data.total_pages, data.page);
    console.log("va pagination");
    console.log(pagination);

    return (
        <div>
            
            ACA VA EL MAP DE data.results


            <nav className="pagination">
                <Link to={`/movie/${classification}/page/${parseInt(pageNumber) - 1}`} /*className="pagination-previous"*/ onClick={prevPage} style={{padding: "5px", color: "white"}}>{'<'}</Link>
                
                {pagination.map(page => {
                    return (<Link
                        key={page}
                        to={`/movie/${classification}/page/${page}`}
                        //className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                        onClick={(e) => changePage(page, e)}
                        style={{padding: "5px", color: "white"}}>
                        {page}
                        </Link>)
                    }) 
                }
    
                <Link to={`/movie/${classification}/page/${parseInt(pageNumber) + 1}`} /*className="pagination-next"*/ onClick={nextPage} style={{padding: "5px", color: "white"}}>{'>'}</Link>
            </nav>
        </div>

    )
}

export default CardCollectionPage;
