import React from 'react';
import s from '../CommonStyles/Block.module.css';
import DisplayingCount from "./DisplayingCount/DisplayingCount";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";

class Counter extends React.Component {

    render() {
        return (
                <div className={s.container}>
                    <DisplayingCount count={this.props.count} maxNumber={this.props.maxNumber}/>
                    <ButtonsBlock increment={this.props.increment}
                                  reset={this.props.reset}
                                  isDisableInc={this.props.isDisableInc}
                                  isDisableReset={this.props.isDisableReset}
                    />
                </div>
        );
    }
}

export default Counter;
