import React from 'react';
import PropTypes from 'prop-types';

// 자동으로 실행함.
/**
 * setState 를 실행하면 
 * state 를 refresh 하고 다시 render함.
 */
class App extends React.Component {
  state = {
    count: 0
  } 
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  componentDidMount() {
    console.log("2 ----- component rendered");
  }
  componentDidUpdate() {
    console.log("i just updated");
  }
  render() {
    console.log("1 ----- im rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
