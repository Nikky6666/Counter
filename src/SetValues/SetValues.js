import React from 'react';
import s from '../CommonStyles/Block.module.css';
import ValuesBlock from "./ValuesBlock/ValuesBlock";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";


class SetValues extends React.Component {

    render() {
        return (
                <div className={s.container}>
                    <ValuesBlock maxValue={this.props.maxValue}
                                 minValue={this.props.minValue}
                                 changeMaxValue={this.props.changeMaxValue}
                                 changeStartValue={this.props.changeStartValue}
                    />
                    <ButtonsBlock isDisableSet={this.props.isDisableSet}
                                  SetValues={this.props.SetValues}
                    />
                </div>
        );
    }
}

export default SetValues;
