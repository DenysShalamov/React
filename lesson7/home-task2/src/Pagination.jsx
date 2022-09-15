import React from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  goPrev,
  goNext,
}) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = currentPage < totalItems / itemsPerPage;

  return (
    <div>
      <div className="pagination">
        <button
          className="btn"
          onClick={() => goPrev()}
          disabled={!isPrevPageAvailable}
        >
          {isPrevPageAvailable ? '←' : ''}
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button
          className="btn"
          onClick={() => goNext()}
          disabled={!isNextPageAvailable}
        >
          {isNextPageAvailable ? '→' : ''}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
