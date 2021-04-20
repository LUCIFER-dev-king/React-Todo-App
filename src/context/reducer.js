import { ADD_TODO, REMOVE_TODO } from "./action.types";

export default (state, actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return [...state, actions.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== actions.payload);

    default:
      return state;
  }
};
