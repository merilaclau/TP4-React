import React, { useEffect, useState } from 'react';
import { getTrendingElements, getMoviesSeries, getSearchResults } from '../../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../../hooks/usePagination';
import './CardCollectionPage.scss';
import Card from '../../Card/Card';

const CardCollectionPage = (props) => {

    const mediatype = props.mediatype;
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(true);
    let { classification, pageNumber } = useParams();
    
    useEffect(() => {
        if (mediatype === "multi") {
            getSearchResults(classification, pageNumber)
            .then(data => setData(data))
            .finally(() => setLoader(false));
        }
        else if (classification === "trending") {
            getTrendingElements(classification, mediatype)
            .then(data => setData(data))
            .finally(() => setLoader(false));
        } else {
            getMoviesSeries(mediatype, classification, pageNumber)
            .then(data => setData(data))
            .finally(() => setLoader(false));
        }   
    }, [pageNumber]);

    let { pagination } = usePagination(data.total_pages, data.page);
    
    console.log(data);
    console.log("va pagination");
    console.log(pagination);

    return (
        <React.Fragment>
            { loader ?
            <div style={{width: "10px", backgroundColor: "white"}}></div> :
            <div className="card--collection-container">
                {data.results.map(item => {
                    return (<Card
                            key={item.id}
                            id={item.id}
                            name={item.name || item.title}
                            poster_path={'https://image.tmdb.org/t/p/w342' + item.poster_path}
                            rating={item.vote_average}
                            mediatype={item.media_type ? item.media_type : mediatype} />
                        )
                    })
                }
            <nav className="pagination">
                <Link to={`/${mediatype}/${classification}/page/${pageNumber - 1}`} style={{padding: "5px", color: "white"}}>{'<'}</Link>
                
                {pagination.map((page, key) => {
                    if (typeof page === "number") {
                        return (<Link
                        className={page === parseInt(pageNumber) ? "currentPage" : null}
                        key={page}
                        to={`/${mediatype}/${classification}/page/${page}`}
                        style={{padding: "5px", color: "white"}}>
                        {page}
                        </Link>)
                    } else {
                        return (<span
                            key={key + `-${page}`}
                            style={{padding: "5px", color: "white"}}>
                            {page}
                        </span>)
                        }   
                    }) 
                }
                <Link to={`/${mediatype}/${classification}/page/${parseInt(pageNumber) + 1}`} style={{padding: "5px", color: "white"}}>{'>'}</Link>
            </nav>
            </div>
        }
        </React.Fragment>
    )
}

export default CardCollectionPage;
