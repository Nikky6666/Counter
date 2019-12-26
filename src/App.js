import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetValues from "./SetValues/SetValues";

class App extends React.Component {
    state = {
        minNumber: 0,
        maxNumber: 5,
        count: 0,
        maxValue: {error: false, number: 5},
        minValue: {error: false, number: 0},
        isDisableSet: false,
    };

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

    increment = () => {
        if (this.state.count < this.state.maxNumber) {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount,
            },() => {this.saveState()})
        }
    };

    reset = () => {
        if (this.state.count > this.state.minNumber) {
            this.setState({
                count: this.state.minNumber
            }, () => {this.saveState()})
        }
    };


    checkOnError = (number) => {
        debugger;
        if (number >= 0 && number % 1 === 0 && !isNaN(number)) {
            return false;
        }
        return true;
    };

    checkCoallision = () => {
        const maxValue = this.state.maxValue.number;
        const minValue = this.state.minValue.number;
        if (maxValue===minValue || maxValue<minValue) {
            this.setState({
                maxValue: {...this.state.maxValue, error: true},
                minValue: {...this.state.minValue, error: true},
                isDisableSet: true,
            }, () => {this.saveState()})
        }
        this.saveState();
    };

    changeMaxValue = (e) => {
        this.changeValue(e, "maxValue", "minValue");
    };

    changeStartValue = (e) => {
        this.changeValue(e, "minValue", "maxValue");
    };

    changeValue = (e, nameChangedValue, nameCheckedValue) =>{
        const newValues = {};
        const newNumber = Number(e.target.value);
        const error = this.checkOnError(newNumber);
        newValues[nameChangedValue] = {error: error, number: newNumber };
        newValues[nameCheckedValue] = {...this.state[nameCheckedValue], error: this.checkOnError(this.state[nameCheckedValue].number)};
        this.setState({...newValues, isDisableSet: error}, () => {this.checkCoallision()});
    };

    SetValues = () => {
        this.setState({
            minNumber: this.state.minValue.number,
            maxNumber: this.state.maxValue.number,
            count: this.state.minValue.number,
            isDisableSet: true,
        })
    };

    render() {
        return (
            <div className="App">

                <SetValues maxValue={this.state.maxValue}
                           minValue={this.state.minValue}
                           changeMaxValue={this.changeMaxValue}
                           changeStartValue={this.changeStartValue}
                           isDisableSet={this.state.isDisableSet}
                           SetValues={this.SetValues}
                />

                <Counter count={this.state.count}
                         maxNumber={this.state.maxNumber}
                         increment={this.increment}
                         reset={this.reset}
                         isDisableInc={this.state.count === this.state.maxNumber||!this.state.isDisableSet||this.state.maxValue.error||this.state.minValue.error}
                         isDisableReset={this.state.count === this.state.minNumber||!this.state.isDisableSet||this.state.maxValue.error||this.state.minValue.error}
                />

            </div>
        );
    }
}

export default App;
