import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";
import {connect} from "react-redux";
import {increment, reset} from "../../redux/reduser";


const ButtonsBlock = (props) => {
    return (
        <div className={s.buttonsBlock}>
            <Button onClickFunction={props.increment} title="inc" isDisabled={props.isDisableInc}/>
            <Button onClickFunction={props.reset} title="reset" isDisabled={props.isDisableRes}/>
        </div>
    )
};


const connectedValuesBlock = connect(null, {increment, reset})(ButtonsBlock);


export default connectedValuesBlock;