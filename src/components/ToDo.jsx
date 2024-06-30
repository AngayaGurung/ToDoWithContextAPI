import { useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

const ToDo = () => {
  const [todo, setToDo] = useState("");
  const { addToDo } = useToDo();
  const addToList = (e) => {
    e.preventDefault();
    if (!todo) return;
    addToDo({ id: Date.now(), toDo: todo, completed: false });
    setToDo("");
  };
  return (
    <div className="container">
      <h2 className="text-center my-5">To Do List</h2>
      <div className="row">
        <div className="col d-flex gap-2 justify-content-center">
          <input
            type="text"
            className="form-control w-50 text-center"
            placeholder="Add Your List"
            value={todo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button className="form-control w-25" onClick={(e) => addToList(e)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
