import { AddNewItem } from './AddNewItem';
import { ColumnProps } from '../types';
import { useAppState } from '../state/AppStateContext';
import { Card } from './Card';

export const Column = ({ id, text, children }: ColumnProps) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <div
      id='column-container'
      className='w-72 bg-[#ebecf0] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-200 min-h-[40px] p-2 rounded grow-0'
    >
      <h2 id='column-title' className='font-bold pt-1 px-4 pb-3'>{text}</h2>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={(text) => console.log(text)}
        dark
      />
    </div>
  );
};