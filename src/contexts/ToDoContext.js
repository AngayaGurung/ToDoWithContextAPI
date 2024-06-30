import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      toDo: "Learn React Js",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
});

export const ToDoProvider = ToDoContext.Provider;

export const useToDo = () => {
  return useContext(ToDoContext);
};
