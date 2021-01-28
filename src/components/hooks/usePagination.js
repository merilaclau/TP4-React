import { useState } from 'react';

const usePagination = (totalPages, currentPage) => {
  const pages = totalPages;
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(currentPage);

  let ellipsisLeft = false;
  let ellipsisRight = false;
  for(let i = 1; i <= pages; i++) {
    if(i === currentPage) {
      pagination.push(
        { id: i, current: true, ellipsis: false }
      );
    }else {
      if(i < 2 || i > pages - 1 || i === currentPage - 1 || i === currentPage + 1 ) {
        pagination.push(
          { id: i, current: false, ellipsis: false }
        );
      }else if( i > 1 && i < currentPage && !ellipsisLeft ) {
        pagination.push(
          { id: i, current: false, ellipsis: true }
        );
        ellipsisLeft = true;
      }else if( i < pages && i > currentPage && !ellipsisRight) {
        pagination.push(
          { id: i, current: false, ellipsis: true }
        );
        ellipsisRight = true;
      }
    }
  } 

  const changePage = (page, e) => {
    e.preventDefault();
    if(page !== currentPage) {
      setCurrentPage(page);
    }
  }

  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal - 1 === 0 ? prevVal : prevVal - 1);
    }
  }
  
  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal === pages ? prevVal : prevVal + 1);
  }

  return {
    pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage
  };
}

export default usePagination;




/*import React from 'react';
//import { useState } from 'react';

const Pagination = (currentPage, totalPages, baseUrl) => {
  const pagination = [];
  //const [currentPage, setCurrentPage] = useState(1);

  let ellipsisLeft = false;
  let ellipsisRight = false;

  for(let i = 1; i <= totalPages; i++) {
    if(i === currentPage) {
      pagination.push(
        { id: i, current: true, ellipsis: false }
      );
    }else {
      if(i === 1 || i === pages || i === currentPage - 1 || i === currentPage + 1 ) {
        pagination.push(
          { id: i, current: false, ellipsis: false }
        );
      }else if( i > 1 && i < currentPage && !ellipsisLeft ) {
        pagination.push(
          { id: i, current: false, ellipsis: true }
        );
        ellipsisLeft = true;
      }else if( i < pages && i > currentPage && !ellipsisRight) {
        pagination.push(
          { id: i, current: false, ellipsis: true }
        );
        ellipsisRight = true;
      }
    }
  } 

  const changePage = (page, e) => {
    e.preventDefault();
    if(page !== currentPage) {
      setCurrentPage(page);
    }
  }

  const goToPrevPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal - 1 === 0 ? prevVal : prevVal - 1);
  }
  
  const goToNextPage = (e) => {
    e.preventDefault();
    setCurrentPage(prevVal => prevVal === pages ? prevVal : prevVal + 1);
  }

  return (
    //pagination,
    //prevPage: goToPrevPage,
    //nextPage: goToNextPage,
    //changePage
    <nav>
        <Link className="go-to-page-btn" to={{ pathname: baseUrl + page.id }}>{page.id}</Link>
        { 
            pagination.map(page => {
                return(
                    {
                    if (page.ellipsis = false ) {
                        <Link className="pagination-link" to={{ pathname: location.pathname + {'/' + page.id} }}>{page.id}</Link>
                    }
                    else {
                        <span>...</span>
                    }
                })
            })
        }
    </nav>
    

  );
}

export default Pagination;*/