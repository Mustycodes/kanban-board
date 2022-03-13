import { nanoid } from "nanoid";
import { Action, AppState } from "../types";
import { findItemIndexById } from "../utils/functions/arrayUtils";

export const appStateReducer = (
  mutableState: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD LIST":
      mutableState.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;

    case "ADD TASK":
      const {text, listId} = action.payload;
      console.log({text});
      console.log({listId});
      
      
      const targetListIndex = findItemIndexById(mutableState.lists, listId);
      console.log({targetListIndex});
      
      mutableState.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text
      })

      break;
    default:
      break;
  }
};
