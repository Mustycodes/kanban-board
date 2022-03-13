import { addTask } from "../state/actions";
import { useAppState } from "../state/AppStateContext";
import { ColumnProps } from "../types";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

export const Column = ({ text, id}: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  return (
    <div id="column-container" className="w-72 bg-[#ebecf0] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-200 min-h-[40px] p-2 rounded grow-0">
      <div id="column-title" className="font-bold pt-1 px-4 pb-3">{text}</div>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))
        }
        dark
      />
    </div>
  );
};
