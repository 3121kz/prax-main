import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Class based event handling");
  }
  render() {
    return (
      <div>
        Class based component
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}
export default ClassEvent;
