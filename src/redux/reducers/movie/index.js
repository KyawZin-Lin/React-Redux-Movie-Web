import { ActionTypes } from "../actions/action-types";

const initialState = {
  movies: [],
  movie: {},
};

// export const movieReducer = (state= initialState ,action)=>{
// i use destruction to action
// }
export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES:
      return { ...initialState, movies: payload };

    case ActionTypes.SELECT_MOVIE:
      return { ...initialState, movie: payload };

    default:
      return;
      state;
  }
};
