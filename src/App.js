import React from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SetValues from "./SetValues/SetValues";

class App extends React.Component {
    state = {
        minNumber: 0,
        maxNumber: 5,
        count: 0,
        inputValues: [
            {name: 'max value', error: false, number: 5},
            {name: 'start value', error: false, number: 0},
        ],
        isDisableSet: false,
    };

    increment = () => {
        if (this.state.count < this.state.maxNumber) {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount,
            })
        }
        ;
    };

    reset = () => {
        if (this.state.count > this.state.minNumber) {
            this.setState({
                count: this.state.minNumber
            })
        }
    };


    checkOnError = (number) => {
        if (number >= 0 && number % 1 === 0 && !isNaN(number)) {
            return false;
        }
        return true;
    };

    checkCoallision = () => {
        const maxValue = this.state.inputValues[0].number;
        const minValue = this.state.inputValues[1].number;
        if (maxValue===minValue || maxValue<minValue) {
            this.setState({
                inputValues: [
                    {
                        ...this.state.inputValues[0],
                        error: true,
                    },
                    {
                        ...this.state.inputValues[1],
                        error: true
                    }],
                isDisableSet: true,
            })
        }
    };

    changeMaxValue = (e) => {
        const newNumber = Number(e.target.value);
        const error = this.checkOnError(newNumber);
        this.setState({
            inputValues: [{
                ...this.state.inputValues[0],
                error: error,
                number: newNumber,
            },
                {
                    ...this.state.inputValues[1],
                    error: this.checkOnError(this.state.inputValues[1].number),
                }],
            isDisableSet: error,
        }, () => {
            this.checkCoallision();
        });
    };

    changeStartValue = (e) => {
        const newNumber = Number(e.target.value);
        const error = this.checkOnError(newNumber);
        this.setState({
            inputValues: [
                {
                    ...this.state.inputValues[0],
                    error: this.checkOnError(this.state.inputValues[0].number),
                },
                {
                    ...this.state.inputValues[1],
                    number: newNumber,
                    error: error,
                }],
            isDisableSet: error,
        }, () => {
            this.checkCoallision();
        });
    };

    SetValues = () => {
        this.setState({
            minNumber: this.state.inputValues[1].number,
            maxNumber: this.state.inputValues[0].number,
            count: this.state.inputValues[1].number,
            isDisableSet: true,
        })
    };

    render() {
        return (
            <div className="App">

                <SetValues inputValues={this.state.inputValues}
                           changeMaxValue={this.changeMaxValue}
                           changeStartValue={this.changeStartValue}
                           isDisableSet={this.state.isDisableSet}
                           SetValues={this.SetValues}
                />

                <Counter count={this.state.count}
                         maxNumber={this.state.maxNumber}
                         increment={this.increment}
                         reset={this.reset}
                         isDisableInc={this.state.count === this.state.maxNumber}
                         isDisableReset={this.state.count === this.state.minNumber}
                />

            </div>
        );
    }
}

export default App;
