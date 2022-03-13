import { nanoid } from "nanoid";
import { Action, AppState } from "../types";

export const appStateReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    default: {
      return state;
    }
  }
};
