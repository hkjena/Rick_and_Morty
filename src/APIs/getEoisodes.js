import axios from "./axios";

const getEpisodes = async (term, currentPage = 1, setError) => {
  let response;
  try {
    if (!term) {
      response = await axios.get(`/episode/?page=${currentPage}`);
    } else {
      response = await axios.get(`/episode/?page=${currentPage}&name=${term}`);
    }
  } catch (e) {
    if (e.message === "Network Error") {
      setError(e.message);
    }
  }
  response && setError("");
  return response;
};

export default getEpisodes;
