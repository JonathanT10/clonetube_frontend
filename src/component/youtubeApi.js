import axios from "axios";
const KEY = "AIzaSyAGnWKXtaDiprjEzk4jg-sFlIL_Vz9g36M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});