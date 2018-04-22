import { FETCH_DATA } from "./types";
import axios from "axios";

// export const fetchData = () => {
//   return async dispatch => {
//     const res = await axios.get("https://swapi.co/api/people");
//     console.log(res);
//   };
// };

// Shortcut
export const fetchData = () => async dispatch => {
  const res = await axios.get("https://swapi.co/api/people");
  dispatch({
    type: FETCH_DATA,
    payload: res.data.results
  });
};
