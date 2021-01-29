import { useState } from 'react';

const usePagination = (totalPages, currentPageParam) => {
  //const pages = totalPages;
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(currentPageParam);

  if (currentPage === 1 || currentPage <= 5) {
    for (let i = 1; i <= 5; i++) {
      pagination.push(i);
    }

    if (totalPages > 7) {
      pagination.push(`&hellip;`);
    } else {
      pagination.push(6);
    }

    pagination.push(totalPages);
  } 
  else if (currentPage === totalPages || currentPage > (totalPages - 4)) {
    pagination.push(1);
    pagination.push(`&hellip;`);

    for (let i = (totalPages - 4); i <= totalPages; i++) {
      pagination.push(i);
    }
  } 
  else {
    pagination.push(1);

    if (((currentPage - 1) > 3) || ((currentPage + 1) < (totalPages - 3))) {
      pagination.push(`&hellip;`);
      pagination.push(currentPage - 1);
      pagination.push(currentPage);
      pagination.push(currentPage + 1);
      pagination.push(`&hellip;`);
    }
    pagination.push(totalPages);
  }

  const changePage = (page) => {
    if(page !== currentPage) {
      setCurrentPage(page);
    }
  }

  const goToPrevPage = () => {
    setCurrentPage(prevVal => prevVal - 1 === 0 ? prevVal : prevVal - 1);
  }
  
  const goToNextPage = () => {
    setCurrentPage(prevVal => prevVal === totalPages ? prevVal : prevVal + 1);
  }

  return { pagination,
    prevPage: goToPrevPage,
    nextPage: goToNextPage,
    changePage
  };
}

export default usePagination;

//PRUEBAS
/*let ellipsisLeft = false;
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
  }*/

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