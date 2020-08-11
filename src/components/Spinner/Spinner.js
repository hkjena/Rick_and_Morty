import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <>
      <section className="spinner">
        <div className="sk-fading-circle">
          <div className="sk-circle sk-circle-1" />
          <div className="sk-circle sk-circle-2" />
          <div className="sk-circle sk-circle-3" />
          <div className="sk-circle sk-circle-4" />
          <div className="sk-circle sk-circle-5" />
          <div className="sk-circle sk-circle-6" />
          <div className="sk-circle sk-circle-7" />
          <div className="sk-circle sk-circle-8" />
          <div className="sk-circle sk-circle-9" />
          <div className="sk-circle sk-circle-10" />
          <div className="sk-circle sk-circle-11" />
          <div className="sk-circle sk-circle-12" />
        </div>
        <h4 className="text-center">
          <span role="img" aria-label="bear image">
            🐻
          </span>{" "}
          Bear with us while we are searching the episodes for you.
        </h4>
      </section>
    </>
  );
};

export default Spinner;
