import { Component } from "react";

export class ClassTrafficLight extends Component {

  state = {
    status: "red",
  };

   checkStatus = (color: string) => (this.state.status === color ? color : "black");
   nextState = () => {
    this.setState({status: this.state.status === "red" ? "yellow" : this.state.status === "yellow" ? "green" : "red" })
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
        <div className={`circle ${this.checkStatus("red")}`}></div>
        <div className={`circle ${this.checkStatus("yellow")}`}></div>
        <div className={`circle ${this.checkStatus("green")}`}></div>
        </div>
        <button onClick={this.nextState} className="next-state-button">Next State</button>
      </div>
    );
  }
}
