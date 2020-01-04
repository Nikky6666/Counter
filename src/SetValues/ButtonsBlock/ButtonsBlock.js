import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";
import {connect} from "react-redux";
import {setValues} from "../../redux/reduser";

const ButtonsBlock = (props) => {
    return (
        <div className={s.container}>
            <Button onClickFunction={props.setValues} isDisabled={props.isDisabled} title='set'/>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        isDisabled: state.isDisableSet
    }
};

const connectedButtonsBlock = connect(mapStateToProps, {setValues})(ButtonsBlock);


export default connectedButtonsBlock;
