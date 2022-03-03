import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
};

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
  return (
    <div className="column-container">
      <div className="column-title">{text}</div>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={(text) => console.log(`${text}`)} />
    </div>
  );
};
