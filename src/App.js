import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import Pagination from "./components/Pagination";
import Cardcontainer from "./components/Cardcontainer";
import SearchBox from "./components/SearchBox";
import Spinner from "./components/Spinner/Spinner";
import getEpisodes from "./APIs/getEoisodes";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPage, settotalPage] = useState(0);
  const [loading, setloading] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [term, setTerm] = useState("");
  const [buttonvisibility, setbuttonvisibility] = useState(false);

  const handlePageChange = async (page) => {
    setloading(true);
    setcurrentPage(page);
    let currentTerm = term;
    if (!buttonvisibility) currentTerm = "";
    let response = await getEpisodes(currentTerm, page);
    updateUI(settotalPage, setEpisodes, setloading, response.data);
  };

  const handelSubmit = async (term) => {
    setTerm(term);
    setloading(true);
    let response = await getEpisodes(term, 1);
    if (!response) {
      setloading(false);
      toast.error("No Episode Found!");
      return;
    }
    updateUI(settotalPage, setEpisodes, setloading, response.data);
    setbuttonvisibility(true);
    setcurrentPage(1);
  };

  const getAllEpisode = async () => {
    setcurrentPage(1);
    setloading(true);
    let response = await getEpisodes("", currentPage);
    updateUI(settotalPage, setEpisodes, setloading, response.data);
    setbuttonvisibility(false);
  };

  useEffect(() => {
    setloading(true);
    async function getData() {
      let response = await getEpisodes(null, null);
      updateUI(settotalPage, setEpisodes, setloading, response.data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
      </div>
    </>
  );
}

const updateUI = (settotalPage, setEpisodes, setloading, data) => {
  const { info, results } = data;
  settotalPage(info.pages);
  setEpisodes(results);
  setloading(false);
};
