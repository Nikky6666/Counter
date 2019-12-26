import React from 'react';
import s from './DisplayingCount.module.css'
import {connect} from "react-redux";

const DisplayingCount = (props)=> {
    return (
        <div className={s.container}>
            {props.message ?
                <div className={s.message}>{props.message}</div> :
                <div className={props.maxNumber === props.count ? s.max : s.notMax}>
                    {props.count}
                </div>}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        count: state.count,
        maxNumber: state.maxNumber
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        changeMaxValue: (number) => {
            const action = {type: "CHANGE_MAX_VALUE", number};
            dispatch(action);
        },
        changeStartValue: (number) => {
            const action = {type: "CHANGE_MIN_VALUE", number};
            dispatch(action);
        }
    }
};

const connectedDisplayingCount = connect(mapStateToProps, mapDispatchToProps)(DisplayingCount);

export default connectedDisplayingCount;