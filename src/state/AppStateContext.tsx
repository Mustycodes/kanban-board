import { createContext, useContext, FC } from 'react';
import { appData } from '../constants';
import { AppStateContextProps } from '../types';

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC = ({ children }) => {
  const { lists } = appData;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};

// import { useImmerReducer } from "use-immer";
// import { appStateReducer } from "./appStateReducer";

// export const AppStateProvider: FC = ({ children }) => {
//   // useImmerReducer allows us to mutate an object
// // and create a new object instance
//   const [state, dispatch] = useImmerReducer(appStateReducer, appData);
//   const { lists, draggedItem } = state;

//   return (
//     <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
//       {children}
//     </AppStateContext.Provider>
//   );
// };
