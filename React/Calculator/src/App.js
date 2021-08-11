//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Result from './Result';
import Keypad from "./Keypad";

class App extends Component {
  constructor(){
      super();
      this.state={result: ""}
  }
  onClick = button => {
    if(button === "="){
        this.calculate()
    }
    else if(button === "C"){
      this.reset()
  }
    else {
        this.setState({result: this.state.result + button})
    }
};

reset = () => {
  this.setState({result: ""})
};

calculate = () => {
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(this.state.result) || "0" ) + ""})
    } catch (e) {
        this.setState({result: "error"})
      }
};
render() {
      return (
          <div>
              <h1>Simple Calculator</h1>
              <Result result={this.state.result}/>
              <Keypad onClick={this.onClick}/>
          </div>);
  }
}
export default App;
