import React, { useEffect, useState } from 'react';
import { getMoviesSeries } from '../../../services/services';
import { Link, useParams } from "react-router-dom";
import usePagination from '../../hooks/usePagination';
import './CardCollectionPage.scss';
import Card from '../../Card/Card';

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
        <React.Fragment>
            <div>
                {data.results.map(item => {
                    return(<Link
      to={{
        pathname: `/${data.mediatype}/${data.id}`
      }}>
      <article className="card">
        <div className="card--header">
          <div type="button"><img className="card--img" src={data.poster_path} /></div>
        </div>
        <div className="card--content">
          <h3 className="card--content-title" >
            {data.name}
          </h3>
          <span className="card--content-rating">
            <FontAwesomeIcon icon={faStar} /> {data.rating}
          </span>
        </div>
      </article>
    </Link>)
                    })
                }
            </div>
            <nav className="pagination">
                <Link to={`/${mediatype}/${classification}/page/${pageNumber - 1}`} style={{padding: "5px", color: "white"}}>{'<'}</Link>
                
                {pagination.map((page, key) => {
                    if (typeof page === "number") {
                        return (<Link
                        className={page == pageNumber ? "currentPage" : null}
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
        </React.Fragment>
    )
}

export default CardCollectionPage;
