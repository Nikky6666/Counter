import React, {useEffect} from 'react';
import s from './ValuesBlock.module.css';
import Input from "./Input/Input";
import {connect} from "react-redux";


const ValuesBlock = (props) => {

    useEffect(()=>{
        const commonError = checkCoallision(props.minValue.number, props.maxValue.number);
        if(commonError) {
            props.setMaxValueError(true);
            props.setMinValueError(true);
        }
    },[props.maxValue.number, props.minValue.number])

    const checkOnError = (number) => {
        if (number >= 0 && number % 1 === 0 && !isNaN(number)) {
            return false;
        }
        return true;
    };

    const checkCoallision = (minValue, maxValue) => {
        if (maxValue === minValue || maxValue < minValue) return true;
        return false;
    };


    const changeValue = (e, setError, setValue) =>{
        const newNumber = Number(e.target.value);
        setError(checkOnError(newNumber));
        setValue(newNumber);
    };

    const onChangeMaxValue = (e) => {
        changeValue(e, props.setMaxValueError, props.setMaxValue);
        props.setMinValueError(false);
    };
    const onChangeStartValue = (e) => {
        changeValue(e, props.setMinValueError, props.setMinValue);
        props.setMaxValueError(false)
    };


    return (
        <div className={s.container}>
            <Input description="max value"
                   callbackFunk={onChangeMaxValue} value={props.maxValue}/>
            <Input description="start value" callbackFunk={onChangeStartValue} value={props.minValue}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        minValue: state.minValue,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMaxValueError: (error)=>{
            const action = {type: "SET_MAX_VALUE_ERROR", error};
            dispatch(action);
        },
        setMaxValue: (number) =>{
            const action = {type: "SET_MAX_VALUE", number};
            dispatch(action);
        },
        setMinValueError: (error)=>{
            const action = {type: "SET_MIN_VALUE_ERROR", error};
            dispatch(action);
        },
        setMinValue: (number)=>{
            const action = {type: "SET_MIN_VALUE", number};
            dispatch(action);
        }
    }
};

const connectedValuesBlock = connect(mapStateToProps, mapDispatchToProps)(ValuesBlock);

export default connectedValuesBlock;
