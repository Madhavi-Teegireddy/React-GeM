


import React, { useState } from 'react';
import TodoList from './TodoList';

const initialState = {
        title: "",
        points: "",
        category: "Booking",
        priority: "High",
        description: ""
}

const Add = () => {
  const [task, setTask] = useState(initialState);

  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.title === "") {
      alert("Title cannot be empty");
      return;
    }
    if (task.points > 8 || task.points <= 0) {
      alert("Points should be 1 to 8");
      return;
    }
    if (task.description === "") {
        alert("please fill description")
        return;
    }
   

    const newTask = {
        ...task,
        createdDate: new Date().toLocaleDateString()
      };

    const newTodos = [...todos, newTask];
    setTodos(newTodos);
    setTask(initialState);
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input
                size="30"
                placeholder="title"
                type="text"
                name="title"
                value={task.title}
                onChange={changeHandler}
              />
              &nbsp;&nbsp;
              <input
                placeholder="points"
                type="number"
                name="points"
                value={task.points}
                onChange={changeHandler}
              />
              <select
                name="category"
                value={task.category}
                onChange={changeHandler}
              >
                <option>Booking</option>
                <option>Development</option>
              </select>
              <select
                name="priority"
                value={task.priority}
                onChange={changeHandler}
              >
                <option>High</option>
                <option>Low</option>
              </select>
              <input
                placeholder="description"
                type="text"
                name="description"
                value={task.description}
                onChange={changeHandler}
              />
              <input type="submit" value="Add" name="Add" />
            </form>

            <TodoList todolist={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default Add;
