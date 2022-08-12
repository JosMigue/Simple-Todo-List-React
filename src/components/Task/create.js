import { Component } from "react";

class Create extends Component {
  state = {
    title: ""
  };
  handleOnChange(e) {
    this.setState({ title: e.target.value });
  }
  addTask(e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.title);
      this.setState({
        title: ""
      });
    }
  }
  render() {
    return (
      <div className="flex-row justify-center">
        <label>
          Title
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => this.handleOnChange(e)}
            onKeyDown={(e) => this.addTask(e)}
          />
        </label>

      </div>
    );
  }
}
export default Create;