import React, { Dispatch } from "react";

export type CardProps = {
  text: string;
  id: string;
};

export type ColumnProps = {
  text: string;
  id: string;
  children?: React.ReactNode
};

export type NewItemFormProps = {
  onAdd(text: string): void;
};

export type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface MoveListAction {
  type: "MOVE_LIST";
  payload: { draggedId: string; hoverId: string };
}

interface SetDraggedItemAction {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | null;
}

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItemAction;

// AppStateContext
export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  // draggedItem: DragItem | null;
};

export type AppStateContextProps = {
  // draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  // dispatch: Dispatch<Action>;
};

export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type DragItem = ColumnDragItem;
