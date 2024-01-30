

import React from 'react';

const TodoList = ({ todolist, deleteHandler }) => {

    const handleEdit = () => {
        console.log("edit")
    }
  return (
    <div>
      <h5 className="card-title">Todo List</h5>
      <ul>
        {todolist.map((task, index) => (
          <div key={index}>
            <span>S.NO: BIT-{(index + 1).toString().padStart(2, '0')}</span>&nbsp;&nbsp;
            <span>Title: {task.title}</span>&nbsp;&nbsp;
            <span>Points: {task.points}</span>&nbsp;&nbsp;
            <span>Category: {task.category}</span>&nbsp;&nbsp;
            <span style={{ backgroundColor: task.priority === 'Low' ? 'green' : 'red' }}>Priority: {task.priority}</span>&nbsp;&nbsp;
            <span>Description: {task.description}</span>&nbsp;&nbsp;
            <span>Created Date: {task.createdDate}</span>&nbsp;&nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
