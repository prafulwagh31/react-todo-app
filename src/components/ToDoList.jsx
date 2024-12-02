import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleComplete, deleteTask, editTask }) => (
  <ul className="list-group">
    {todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))}
  </ul>
);

export default ToDoList;
