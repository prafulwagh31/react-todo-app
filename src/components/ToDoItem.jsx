import React from "react";

const ToDoItem = ({ todo, toggleComplete, deleteTask, editTask }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? "text-decoration-line-through" : ""
      }`}
    >
      <span>{todo.text}</span>
      <div>
        <button
          className="btn btn-success btn-sm me-2"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => editTask(todo.id)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
