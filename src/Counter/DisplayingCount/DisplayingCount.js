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


const connectedDisplayingCount = connect(mapStateToProps, null)(DisplayingCount);

export default connectedDisplayingCount;