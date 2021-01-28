import React, { useEffect, useState } from 'react';
import { getMoviesSeriesByPage } from '../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../hooks/usePagination';

const CardCollectionPage = (props) => {

    console.log(props);

    const [data, setData] = useState({});

    let { pageNumber } = useParams();
    let paramsObject = useParams(); //test para ver qué devuelve todo useParams en linea 12

    useEffect(() => {
        console.log(pageNumber);
        console.log(paramsObject);

        //ACA VA LA LLAMADA A LA API CON PAGE DINAMICA
        getMoviesSeriesByPage("movie", "top_rated", pageNumber).then(data => setData(data));
    }, []);

    console.log(data);
    
    const {pagination, prevPage, nextPage, changePage} = usePagination(data.total_pages, data.page)

    return (
        <div>
            holi
            //ACA VA EL MAP DE data.results


            <nav className="pagination">
                <Link to={{ pathname: '/'}} /*className="pagination-previous"*/ onClick={prevPage}>{'<'}</Link>
                
                {pagination.map((page) => {
                    if (!page.ellipsis) {
                    return (<Link
                        key={page.id}
                        to={`/movie/top_rated/page/${page.id}`}
                        className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                        onClick={(e) => changePage(page.id, e)}>
                        {page.id}
                        </Link>)
                    } else {
                    return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
                    }
                }
                )}
    
                <Link to={`/movie`} /*className="pagination-next"*/ onClick={nextPage}>{'>'}</Link>
            </nav>
        </div>

    )
}

export default CardCollectionPage;
