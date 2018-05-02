import { FETCH_DATA, REMOVE_ITEM, ADD_ITEM } from "./types";
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
  // To find out where the data is in reponse console log it
  // console.log(res);
  dispatch({
    type: FETCH_DATA,
    payload: res.data.results
  });
};

export const removeItem = name => async dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: name
  });
};

export const addItem = name => async dispatch => {
  // dispatch({
  //   type: ADD_ITEM,
  //   payload: {name: name}
  // });

  // Shortcut for the one above. When the key and the value is the same name you just type the one
  dispatch({
    type: ADD_ITEM,
    payload: { name }
  });
};
