import { Column } from './components/Column';
import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { useAppState } from './state/AppStateContext';

export function App() {
  const { lists } = useAppState();
  return (
    <main
      id='app-container'
      className='bg-primary flex items-start gap-5 h-full w-full p-5'
    >
      {lists.map((list) => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => console.log(text)}
      />
    </main>
  );
}

// import { addList } from "./state/actions";

// export function App() {
//   const { lists, dispatch } = useAppState();
//   return (
//     <main
//       id="app-container"
//       className="bg-primary flex items-start gap-5 h-full w-full p-5"
//     >
//       {lists.map((list) => (
//         <Column key={list.id} id={list.id} text={list.text} />
//       ))}
//       <AddNewItem
//         toggleButtonText="+ Add another list"
//         onAdd={(text) => dispatch(addList(text))}
//       />
//     </main>
//   );
// }
