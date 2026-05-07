import React from "react";
import Menu from "../Menu";

class ComponentDidMount extends React.Component {
    constructor(props) {
      super(props);
      console.log('Constructor called');
      this.state = {
        count: 0
      };
    }
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps called');
      return null;
    }
    componentDidMount() {
      console.log('componentDidMount called');
    }
    incrementCount = () => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    };
    render() {
      console.log('render called');
      return (
        <div>
          <Menu></Menu>
          <h1>Counter App</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }

  export default ComponentDidMount