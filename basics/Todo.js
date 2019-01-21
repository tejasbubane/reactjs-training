import React from "react";

import TodoList from "./TodoList";

class Todo extends React.Component {
  constructor(props) {
    super(props) // initializing the props
    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  updateCurrentTodo = (e) => {
    this.setState({currentTodo: e.target.value})
  }

  addTodo = () => {
    this.setState(prevState => ({
      todos: [prevState.currentTodo, ...this.state.todos],
      currentTodo: ""
    }))
  }

  render() {
    return (
      <div>
        <input value={this.state.currentTodo} onChange={this.updateCurrentTodo}/>
        <button onClick={this.addTodo}>ADD</button>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default Todo;
