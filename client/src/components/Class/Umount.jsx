import React from "react";
import Menu from '../Menu'

class Child extends React.Component {
    componentDidMount() {
        console.log('Component mounted');
    }
    componentWillUnmount() {
        console.log('Component unmounted');
    }
    render() {
        return (
            <div>
                <p>Child Component content</p>
            </div>
        );
    }
}

export default class UnmountingExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: true
        };
    }
    toggleComponent = () => {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent
        }));
    };
    render() {
        return (
            <div>
                <Menu></Menu>
                <h1 >Main Component</h1>
                {this.state.showComponent && <Child />}
                <button onClick={this.toggleComponent}>
                    {this.state.showComponent ? 'Unmount' : 'Mount'}
                </button>
            </div>
        );
    }
}