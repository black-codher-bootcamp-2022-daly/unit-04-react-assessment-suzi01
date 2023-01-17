import React from "react";

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  increase,
  decrease,
  last,
  first,
}) => {
  let pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      <h2>
        Page {currentPage} of {pageNumbers.length - 1}
      </h2>
      <div className="container-buttons">
        <div className="left-buttons">
          <button disabled={currentPage === 1} onClick={() => first()}>
          &lt;&lt; First
          </button>
          <button disabled={currentPage === 1} onClick={() => decrease()}>
          &lt; Previous
          </button>
        </div>
        <div className="right-buttons">
          <button
            disabled={currentPage === pageNumbers.length - 1}
            onClick={() => increase()}
          >
            Next &gt;
          </button>
          <button
            disabled={currentPage === pageNumbers.length - 1}
            onClick={() => last(pageNumbers.length - 1)}
          >
            Last &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
