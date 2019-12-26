import React from 'react';
import s from './ValuesBlock.module.css';
import Input from "./Input/Input";
import {connect} from "react-redux";


const ValuesBlock = (props) => {


    const checkOnError = (number) => {
        if (number >= 0 && number % 1 === 0 && !isNaN(number)) {
            return false;
        }
        return true;
    };

    const checkCoallision = (minValue, maxValue) => {
        debugger;
        if(maxValue===minValue || maxValue<minValue)return true;
        return false;
    };

    const changeMaxValue = (e) => {
        const newNumber = Number(e.target.value);
        const error = checkOnError(newNumber);
        if(checkCoallision(props.minValue.number, newNumber))
            props.setValues(props.minValue.number,true,newNumber,true, true);
        else if(error) props.setValues(props.minValue.number,false, newNumber,true, true);
        else {
            props.setValues(props.minValue.number,false,newNumber,false, false)}
    };

    const changeStartValue = (e) => {
        const newNumber = Number(e.target.value);
        const error = checkOnError(newNumber);
        if(checkCoallision(newNumber, props.maxValue.number))
            props.setValues(newNumber, true, props.maxValue.number, true, true);
        else if(error) props.setValues(newNumber,true, props.maxValue.number,false, true);
        else {
        /*    debugger;*/
            props.setValues(newNumber, false, props.maxValue.number, false, false)
        }
    };


    return (
        <div className={s.container}>
            <Input description="max value"
                   callbackFunk={changeMaxValue} value={props.maxValue}/>
            <Input description="start value" callbackFunk={changeStartValue} value={props.minValue}/>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        minValue:  state.minValue,
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        setValues: (minValueNumber, minValueError, maxValueNumber, maxValueError, isDisableSet) => {
            const action = {type: "SET_INPUT_VALUES",
                newValues: {
                    maxValue: {error: maxValueError, number: maxValueNumber},
                    minValue: {error: minValueError, number: minValueNumber},
                    isDisableSet
                }
            };
            dispatch(action);
        }
    }
};

const connectedValuesBlock = connect(mapStateToProps, mapDispatchToProps)(ValuesBlock);

export default connectedValuesBlock;
