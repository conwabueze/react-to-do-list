import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      todoEditText: "",
    };

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
  }

  handleDeleteTask() {
    this.props.deleteTask(this.props.id);
  }

  toggleEditMode(e) {
    e.preventDefault();
    this.setState({ editMode: true });
  }

  handleInput(e) {
    e.preventDefault();
    this.setState = { todoText: e.target.value };
  }

  handleEditTask(e) {
    e.preventDefault();
    this.props.editTask(this.props.id, e.target.firstChild.value);
  }

  render() {
    let renderTodoText = this.state.editMode ? (
      <input />
    ) : (
      <input value={this.props.todo} disabled />
    );

    const renderEditButton = this.state.editMode ? (
      <button type="submit">Submit</button>
    ) : (
      <button onClick={this.toggleEditMode}>Edit</button>
    );
    return (
      <div className="Todo">
        <form onSubmit={this.handleEditTask}>
          {renderTodoText}
          <button onClick={this.handleDeleteTask}>X</button>
          {renderEditButton}
        </form>
      </div>
    );
  }
}

export default Todo;
