import React, { memo } from "react";
const Pagination = (props) => {
  let { currentPage, totalPage, onPageChange } = props;
  return (
    <>
      <nav
        aria-label="Page navigation"
        className={totalPage > 1 ? "mt-4" : "d-none"}
      >
        <ul className="pagination justify-content-end">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <button
              className="page-link"
              tabIndex="-1"
              onClick={() => onPageChange((currentPage -= 1))}
            >
              Previous
            </button>
          </li>
          <li
            className={
              currentPage === totalPage ? "page-item disabled" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() => onPageChange((currentPage += 1))}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default memo(Pagination);
