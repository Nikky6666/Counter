import React from 'react';
import s from './ButtonsBlock.module.css'
import Button from "../../Button/Button";
import {connect} from "react-redux";


const ButtonsBlock = (props) => {
    return (
        <div className={s.container}>
            <Button onClickFunction={props.SetValues} isDisabled={props.isDisabled} title='set'/>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        isDisabled: state.isDisableSet
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        SetValues: () => {
            const action = {type: "SET_VALUES"};
            dispatch(action);
        }
    }
};

const connectedButtonsBlock = connect(mapStateToProps, mapDispatchToProps)(ButtonsBlock)


export default connectedButtonsBlock;
