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
};