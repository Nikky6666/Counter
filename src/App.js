import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetValues from "./SetValues/SetValues";

class App extends React.Component {/*

    componentDidMount() {
        this.restorState();
    }

    saveState = () => {
        const stateAsString = JSON.stringify(this.state);
        localStorage.setItem("counterState", stateAsString);
    };

    restorState = () => {
        let stateAsString = localStorage.getItem("counterState");
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            this.setState(state);
        }
    };
*/
    render() {
        return (
            <div className="App">
                <SetValues />
                <Counter />
            </div>
        );
    }
}


export default App;
