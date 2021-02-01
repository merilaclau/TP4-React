import { useEffect, useState } from 'react';

const usePagination = (totalPages, pageNum) => {
  //const pages = totalPages;
  const pagination = [];
  const [currentPage, setCurrentPage] = useState(pageNum);

  useEffect(() => {
    setCurrentPage(pageNum)
  }, [pageNum])

  if (currentPage === 1 || currentPage <= 5) {
    for (let i = 1; i <= 5; i++) {
      pagination.push(i);
    }

    if (totalPages > 7) {
      pagination.push((<span>&hellip;</span>));
    } else {
      pagination.push(6);
    }

    pagination.push(totalPages);
  } 
  else if (currentPage === totalPages || currentPage > (totalPages - 4)) {
    pagination.push(1);
    pagination.push((<span>&hellip;</span>));

    for (let i = (totalPages - 4); i <= totalPages; i++) {
      pagination.push(i);
    }
  } 
  else {
    pagination.push(1);

    if (((currentPage - 1) > 3) || ((currentPage + 1) < (totalPages - 3))) {
      pagination.push((<span>&hellip;</span>));
      pagination.push(currentPage - 1);
      pagination.push(currentPage);
      pagination.push(currentPage + 1);
      pagination.push((<span>&hellip;</span>));
    }
    pagination.push(totalPages);
  }

  return { pagination
  };
}

export default usePagination;
