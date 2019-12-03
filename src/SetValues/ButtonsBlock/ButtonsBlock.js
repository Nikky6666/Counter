import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";


class ButtonsBlock extends React.Component {

    onSetValues = () => {
        this.props.SetValues();
    };

    render() {
        return (
                <div className={s.container}>
                    <Button onClickFunction={this.onSetValues} isDisabled={this.props.isDisableSet} title='set'/>
                </div>
        );
    }
}

export default ButtonsBlock;
