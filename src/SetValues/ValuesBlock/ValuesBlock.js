import React from 'react';
import s from './ValuesBlock.module.css';
import Input from "./Input/Input";


class ValuesBlock extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <Input callbackFunk={this.props.changeMaxValue} value={this.props.inputValues[0]}/>
                <Input callbackFunk={this.props.changeStartValue} value={this.props.inputValues[1]}/>
            </div>
        );
    }
}

export default ValuesBlock;
