import React from "react";

const TodoList = (props) => (
  <ul>
    {props.todos.map(todo => <li>{todo}</li>)}
  </ul>
)

export default TodoList;
