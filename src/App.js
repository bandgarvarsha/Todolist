import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      task: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      task: "Vacuum floor",
      complete: false,
    },
    {
      id: 4,
      task: "Feed cat",
      complete: true,
    },
    {
      id: 5,
      task: "Change light bulbs",
      complete: false,
    },
    {
      id: 6,
      task: "Go to Store",
      complete: true,
    },
  ]);
  const [task, setTask] = useState("");

  const [edit, setEdit] = useState(false);
  const [indexx, setIndexx] = useState(null); // for seting the index

  const addUser = (event) => {
    event.preventDefault();

    let tod = { task };

    if (edit) {
      // update user
      let copy = todos;
      copy[indexx] = tod;

      setTodos([...copy]);
      setEdit(false);
      setIndexx(null);
    } else {
      // add user
      setTodos([...todos, tod]);
    }
    setTask("");
  };

  const onEditClick = (index) => {
    const todoo = todos[index];
    setTask(todoo.task);

    setIndexx(index);
    setEdit(true);
    // console.log("Edit");
  };

  const onDeleteClick = (todo) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const removeItem = todos.filter((item) => item !== todo);
      setTodos([...removeItem]);
    }
  };

  return (
    <div>
      <Header />

      <form onSubmit={addUser} className="col-lg-3  m-25 mb-5  form-group">
        <div className="form-group">
          <label htmlFor="Task"></label>
          <div className="d-flex ">
            <input
              tyep="text"
              placeholder="Add a todo"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-success  btn-default m-25 ">
              {edit ? "Update" : "ADD"}
            </button>
          </div>
        </div>
      </form>

      <table className="table table-bordered table-hover table-secondary bg-secondary  w-50 m-25">
        <thead>
          <tr>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr>
              <td>
                <input type="checkbox" complete={todo.complete} />
                <span
                  style={todo.done ? { textDecoration: "line-through" } : null}
                />
                &nbsp;
                {todo.task}
              </td>
              <td>
                <button
                  className=" btn btn-info ml-5 "
                  onClick={() => onEditClick(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteClick(todo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
