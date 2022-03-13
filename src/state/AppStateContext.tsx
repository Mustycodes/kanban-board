import { createContext, useContext, FC } from "react";
import { useImmerReducer } from "use-immer";
import { appData } from "../constants";
import { AppStateContextProps } from "../types";
import { appStateReducer } from "./appStateReducer";

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC = ({ children }) => {
  // useImmerReducer allows us to mutate an object
// and create a new object instance 
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
