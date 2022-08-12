import { Component } from "react";

export default class Index extends Component {
  styles = {
    style: "display:flex;"
  };
  deleteTask(index) {
    this.props.deleteTask(index);
  }
  updateTask(index) {
    this.props.updateTask(index);
  }
  render() {
    return this.props.tasks.map((task, index) => {
      return (
        <div key={index}>
          {task.title} Done ? {task.done ? "✅" : "❌"}{" "}
          <div>
            <button type="text" onClick={(e) => this.deleteTask(index)}>
              :(
            </button>
            <button type="text" onClick={(e) => this.updateTask(index)}>
              {task.done ? "❌" : "✅"}
            </button>
          </div>
        </div>
      );
    });
  }
}
