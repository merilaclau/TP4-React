import React, { useEffect, useState } from 'react';
import { getMoviesSeriesByPage } from '../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../hooks/usePagination';

const CardCollectionPage = (props) => {

    console.log(props);
    const mediatype = props.mediatype;
    const [data, setData] = useState({});
    let { classification, pageNumber } = useParams();

    useEffect(() => {
        getMoviesSeriesByPage(mediatype, classification, pageNumber).then(data => setData(data));
    }, [pageNumber]);

    let {pagination, prevPage, nextPage, changePage} = usePagination(data.total_pages, data.page);
    
    console.log(data);
    console.log("va pagination");
    console.log(pagination);

    return (
        <div>
            
            ACA VA EL MAP DE data.results


            <nav className="pagination">
                <Link to={`/${mediatype}/${classification}/page/${parseInt(pageNumber) - 1}`} /*className="pagination-previous"*/ onClick={prevPage} style={{padding: "5px", color: "white"}}>{'<'}</Link>
                
                {pagination.map(page => {
                    if (typeof page === "number") {
                        return (<Link
                        key={page}
                        to={`/${mediatype}/${classification}/page/${page}`}
                        //className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                        onClick={(e) => changePage(page, e)}
                        style={{padding: "5px", color: "white"}}>
                        {page}
                        </Link>)
                    } else {
                        let i = 0;
                            return (<span
                                key={i++ + `${page}`}
                                style={{padding: "5px", color: "white"}}>
                                {page}
                            </span>)
                        }   
                    }) 
                }
                <Link to={`/${mediatype}/${classification}/page/${parseInt(pageNumber) + 1}`} /*className="pagination-next"*/ onClick={nextPage} style={{padding: "5px", color: "white"}}>{'>'}</Link>
            </nav>
        </div>

    )
}

export default CardCollectionPage;
