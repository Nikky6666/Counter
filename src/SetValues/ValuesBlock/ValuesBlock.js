import React from 'react';
import s from './ValuesBlock.module.css';
import Input from "./Input/Input";


class ValuesBlock extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <Input description="max value" callbackFunk={this.props.changeMaxValue} value={this.props.maxValue}/>
                <Input description="start value" callbackFunk={this.props.changeStartValue} value={this.props.minValue}/>
            </div>
        );
    }
}

export default ValuesBlock;
