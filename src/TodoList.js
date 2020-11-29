import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  createTask(task) {
    const todos = [...this.state.todos, [uuidv4(), task]];
    this.setState({ todos: todos });
  }

  renderTask() {
    return this.state.todos.map((todo) => (
      <Todo
        key={todo[0]}
        id={todo[0]}
        todo={todo[1]}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
      />
    ));
  }

  deleteTask(id) {
    const todos = this.state.todos.filter((todo) => todo[0] !== id);
    this.setState({ todos: todos });
  }

  editTask(id, newValue) {
    console.log(id, newValue);
    const todos = this.state.todos.forEach((todo) => {
      if (todo[0] === id) todo[1] = newValue;
    });

    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <NewTodoForm createTask={this.createTask} />
        {this.renderTask()}
      </div>
    );
  }
}

export default TodoList;
