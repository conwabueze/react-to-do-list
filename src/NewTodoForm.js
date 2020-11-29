import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCreateTask = this.handleCreateTask.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCreateTask(e) {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({ task: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateTask}>
          <label>Enter Task: </label>
          <input
            name="task"
            onChange={this.handleInput}
            value={this.state.task}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
