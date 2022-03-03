import { AddNewItem } from "./components/AddNewItem";
import { Card } from "./components/Card";
import { Column } from "./components/Column";

type AddItemButtonProps = {
  dark?: boolean;
};

export function App() {
  return (
    <div className="App-container">
      <Column text="To Do">
        <Card text="Generate App Structure" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>

      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </div>
  );
}
