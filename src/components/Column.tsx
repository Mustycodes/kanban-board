import { ColumnProps } from "../types";
import { AddNewItem } from "./AddNewItem";

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
  return (
    <div id="column-container" className="w-72 bg-[#ebecf0] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-lg border border-gray-200 min-h-[40px] p-2 rounded grow-0">
      <div id="column-title" className="font-bold pt-1 px-4 pb-3">{text}</div>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => console.log(`${text}`)}
        dark
      />
    </div>
  );
};
