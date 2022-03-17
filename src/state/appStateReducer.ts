import { nanoid } from "nanoid";
import { Action, AppState } from "../types";
import { findItemIndexById, moveItem } from "../utils/functions/arrayUtils";

export const appStateReducer = (
  mutableState: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST":
      mutableState.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;

    case "ADD_TASK":
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(mutableState.lists, listId);
      mutableState.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;

    case "MOVE_LIST":
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(mutableState.lists, draggedId);
      const hoverIndex = findItemIndexById(mutableState.lists, hoverId);
      mutableState.lists = moveItem(mutableState.lists, dragIndex, hoverIndex);
      break;
    default:
      break;
  }
};
