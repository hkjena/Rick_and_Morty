import axios from "./axios";
import { toast } from "react-toastify";

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
      toast.error("Network Error!");
    }
  }
  return response;
};

export default getEpisodes;
