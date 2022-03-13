import { Dispatch } from "react";

export type CardProps = {
  text: string;
  id: string;
};

export type ColumnProps = {
  text: string;
  id:string;
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
  type: "ADD LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD TASK";
  payload: { text: string; listId: string };
}

export type Action = AddListAction | AddTaskAction;

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
};

export type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>
};