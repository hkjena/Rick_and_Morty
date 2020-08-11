import React, { memo } from "react";

const SearchBox = ({ OnSubmit, onButtonClick, visibility, setTerm, term }) => {
  const formSubmit = (e) => {
    e.preventDefault();
    if (!term) return;
    if (!term.trim()) return;
    OnSubmit(term);
  };

  return (
    <div className="d-flex mb-4 flex-wrap justify-content-center">
      <button
        type="submit"
        className={visibility ? "btn btn-danger mb-2" : "d-none"}
        onClick={() => onButtonClick()}
      >
        Get All Episode
      </button>
      <form className="form-inline ml-auto mt-1" onSubmit={formSubmit}>
        <div className="form-group mb-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 ml-1">
          Search
        </button>
      </form>
    </div>
  );
};

export default memo(SearchBox);
