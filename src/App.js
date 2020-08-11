import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

import Pagination from "./components/Pagination";
import Cardcontainer from "./components/Cardcontainer";
import SearchBox from "./components/SearchBox";
import Spinner from "./components/Spinner/Spinner";
import getEpisodes from "./APIs/getEoisodes";
import ToastComponent from "./components/ToastComponent";

export default function App() {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, settotalPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const [buttonvisibility, setbuttonvisibility] = useState(false);

  const handlePageChange = async (page) => {
    setloading(true);
    setcurrentPage(page);
    let currentTerm = term;
    if (!buttonvisibility) currentTerm = "";
    let response = await getEpisodes(currentTerm, page, setError);
    updateUI(settotalPage, setEpisodes, setloading, response.data);
  };

  const handelSubmit = async (term) => {
    setTerm(term);
    setloading(true);
    let response = await getEpisodes(term, currentPage, setError);
    if (!response) {
      setloading(false);
      setShow(true);
      return;
    }
    updateUI(settotalPage, setEpisodes, setloading, response.data);
    setbuttonvisibility(true);
    setcurrentPage(1);
  };

  const getAllEpisode = async () => {
    setcurrentPage(1);
    setloading(true);
    let response = await getEpisodes("", currentPage, setError);
    updateUI(settotalPage, setEpisodes, setloading, response.data);
    setbuttonvisibility(false);
  };

  useEffect(() => {
    setloading(true);
    async function getData() {
      let response = await getEpisodes(null, null, setError);
      updateUI(settotalPage, setEpisodes, setloading, response.data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-2">
          <u>The Rick and Morty</u>
        </h2>
        <SearchBox
          OnSubmit={handelSubmit}
          onButtonClick={getAllEpisode}
          visibility={buttonvisibility}
          setTerm={setTerm}
          term={term}
        />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Cardcontainer episodes={episodes} />
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
        <ToastComponent show={show} setShow={setShow} errormsg={error} />
      </div>
    </>
  );
}

const updateUI = async (settotalPage, setEpisodes, setloading, data) => {
  const { info, results } = data;
  settotalPage(info.pages);
  setEpisodes(results);
  setloading(false);
};
