import React from 'react';

const Pagination = props => {
  let textPrevBtn = '';
  let textNextBtn = '';
  let isPrevPageAvailable = false;
  let isNextPageAvailable = true;

  if (props.currentPage > 1) {
    isPrevPageAvailable = true;
    textPrevBtn = '←';
  }

  if (!(props.totalItems - props.itemsPerPage * props.currentPage > 0)) {
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
          onClick={() => props.goPrev()}
          disabled={!isPrevPageAvailable}
        >
          {textPrevBtn}
        </button>
        <span className="pagination__page">{props.currentPage}</span>
        <button
          className="btn"
          onClick={() => props.goNext()}
          disabled={isNextPageAvailable}
        >
          {textNextBtn}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
