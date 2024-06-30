import { useToDo } from "../contexts/ToDoContext";

const ListOfToDo = () => {
  const { todos, deleteToDo } = useToDo();

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteToDo(id);
  };

  return (
    <div className="text-center my-3 d-flex justify-content-center flex-column align-items-center mt-5">
      {todos.map((todo) => (
        <table key={todo.todo.id} className="table w-50">
          <tbody>
            <tr className="d-flex justify-content-between border border-secondary p-1 rounded">
              <td className="border-0">{todo.todo.toDo}</td>
              <td
                className="border-0"
                onClick={(e) => handleDelete(e, todo.todo.id)}
              >
                <span>Delete</span>
                <i className="fa-solid fa-delete-left bg-transparent mx-3 text-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default ListOfToDo;
