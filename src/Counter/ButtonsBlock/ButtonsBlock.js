import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";


class ButtonsBlock extends React.Component {

    render() {
        return (
            <div className={s.buttonsBlock}>
                <Button onClickFunction={this.props.increment} title="inc" isDisabled={this.props.isDisableInc}/>
                <Button onClickFunction={this.props.reset} title="reset" isDisabled={this.props.isDisableReset}/>
            </div>
        )
    }
};

export default ButtonsBlock;