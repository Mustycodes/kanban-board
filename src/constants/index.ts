import { AppState } from "../types";

export const appData: AppState = {
    lists: [
      {
        id: "0",
        text: "To Do",
        tasks: [{ id: "c0", text: "Create new password" }],
      },
      {
        id: "1",
        text: "In Progress",
        tasks: [{ id: "c2", text: "Learn Typescript" }],
      },
      {
        id: "2",
        text: "Done",
        tasks: [{ id: "c3", text: "Begin to use static typing" }],
      },
    ],
  };