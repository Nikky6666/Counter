import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";
import {connect} from "react-redux";


const ButtonsBlock = (props) => {
    return (
        <div className={s.buttonsBlock}>
            <Button onClickFunction={props.increment} title="inc" isDisabled={props.isDisableInc}/>
            <Button onClickFunction={props.reset} title="reset" isDisabled={props.isDisableReset}/>
        </div>
    )
};

const mapDispatchToProps = (dispatch) =>{
    return {
        increment: () => {
            const action = {type: "INCREMENT"};
            dispatch(action);
        },
        reset: () => {
            const action = {type: "RESET"};
            dispatch(action);
        }
    }
};

const connectedValuesBlock = connect(null, mapDispatchToProps)(ButtonsBlock);


export default connectedValuesBlock;