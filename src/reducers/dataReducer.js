import { FETCH_DATA, REMOVE_ITEM, ADD_ITEM } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case REMOVE_ITEM:
      // In action.payload there is a name of item I want to remove
      // Remove the item with the name from state
      const newState = state.filter(item => item.name !== action.payload);
      return newState;
    case ADD_ITEM:
      // Won't work because reducer thing we are not updating state
      // state.push(action.payload);
      // return state;

      return [...state, action.payload];
    default:
      return state;
  }
};
