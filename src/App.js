import { Component } from "react";
import "./index.css";
import tasks from "./database/tasks.json";
import FormTask from "./components/Task/create";
import TaskList from "./components/Task/index";

// Implement a TODO list using React :
// - create input to add an item to todo list
// - delete an item from the todo list
// - click item to complete item, striketrhough the 'completed' item

// Note: the item 1 and item 2 in html is just for demo purpose, in implemenation, feel free to delete th

// bonus:
// - using hook pattern
// - update item text

class App extends Component {
  state = {
    tasks: tasks
  };
  updateTaks = (array) => {
    this.setState({
      tasks: array
    });
  };
  AddTask = (title) => {
    let newTask = {
      title: title,
      done: false
    };
    this.updateTaks([...this.state.tasks, newTask]);
  };

  deleteTask = (indexToDelete) => {
    let userResponse = window.confirm("Are you sure?");
    if (userResponse) {
      const taskFiltered = this.state.tasks.filter(
        (task, index) => index !== indexToDelete
      );
      this.updateTaks(taskFiltered);
    } else {
      alert("Nothing Happen :)");
    }
  };

  updateTask = (indexToUpdate) => {
    const newTasks = this.state.tasks.map((task, index) => {
      if (index === indexToUpdate) {
        task.done = !task.done;
      }
      return task;
    });
    this.updateTaks(newTasks);
  };

  render() {
    return ( 
      <div className="App">
        <h1>Todo List</h1>
        <h2>What needs to be done today?</h2>
        <div>
          <FormTask addTask={this.AddTask} />
        </div>
        <div>
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
          />
        </div>
      </div>
    );
  }
}
export default App;
