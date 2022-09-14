import React from 'react';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  goPrev,
  goNext,
}) => {
  let textPrevBtn = '';
  let textNextBtn = '';
  let isPrevPageAvailable = false;
  let isNextPageAvailable = true;

  if (currentPage > 1) {
    isPrevPageAvailable = true;
    textPrevBtn = '←';
  }

  if (!(totalItems - itemsPerPage * currentPage > 0)) {
    isNextPageAvailable = true;
    textNextBtn = '';
  } else {
    isNextPageAvailable = false;
    textNextBtn = '→';
  }

  return (
    <div>
      <div className="pagination">
        <button
          className="btn"
          onClick={() => goPrev()}
          disabled={!isPrevPageAvailable}
        >
          {textPrevBtn}
        </button>
        <span className="pagination__page">{currentPage}</span>
        <button
          className="btn"
          onClick={() => goNext()}
          disabled={isNextPageAvailable}
        >
          {textNextBtn}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
