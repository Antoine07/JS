import { shuffle } from "../utils/shuffle";

export const initialState = {
  numbers: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      const { number } = action.payload;

      return {
        ...state,
        numbers: [...state.numbers, number],
      };

    case "SHUFFLE":
      const shuffleNumbers = shuffle(state.numbers); // pas de copie JS travaille sur la même ref
      return {
        ...state,
        numbers: [...shuffleNumbers],
      };

    default:
      return state;
  }
}
