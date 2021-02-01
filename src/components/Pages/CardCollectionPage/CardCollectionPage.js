import React, { useEffect, useState } from 'react';
import { getMoviesSeries } from '../../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../../hooks/usePagination';
import './CardCollectionPage.scss';

const CardCollectionPage = (props) => {

    console.log(props);
    const mediatype = props.mediatype;
    const [data, setData] = useState({});
    let { classification, pageNumber } = useParams();

    useEffect(() => {
        getMoviesSeries(mediatype, classification, pageNumber).then(data => setData(data));
    }, [pageNumber]);

    let { pagination } = usePagination(data.total_pages, data.page);
    
    console.log(data);
    console.log("va pagination");
    console.log(pagination);

    return (
        <div>
            
            ACA VA EL MAP DE data.results

            <nav className="pagination">
                <Link to={`/${mediatype}/${classification}/page/${pageNumber - 1}`} /*className="pagination-previous"*/ style={{padding: "5px", color: "white"}}>{'<'}</Link>
                
                {pagination.map(page => {
                    if (typeof page === "number") {
                        return (<Link
                        className={page == pageNumber ? "currentPage" : null}
                        key={page}
                        to={`/${mediatype}/${classification}/page/${page}`}
                        //className={page.current ? 'pagination-link is-current' : 'pagination-link'}
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
                <Link to={`/${mediatype}/${classification}/page/${parseInt(pageNumber) + 1}`} /*className="pagination-next" */ style={{padding: "5px", color: "white"}}>{'>'}</Link>
            </nav>
        </div>
    )
}

export default CardCollectionPage;
