import { useState } from "react";
import ToDo from "./components/ToDo";
import ListOfToDo from "./components/ListOfToDo";
import { ToDoProvider } from "./contexts/ToDoContext";

const App = () => {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos([...todos, { todo }]);
  };
  // const updateToDo = (id, todo) => {};
  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.todo.id !== id));
  };

  // todos, addToDo, updateToDo, deleteToDo

  return (
    <>
      <ToDoProvider value={{ todos, addToDo, deleteToDo }}>
        <ToDo />
        <ListOfToDo />
      </ToDoProvider>
    </>
  );
};

export default App;
