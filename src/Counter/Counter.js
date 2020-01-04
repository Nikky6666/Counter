import React from 'react';
import s from '../CommonStyles/Block.module.css';
import DisplayingCount from "./DisplayingCount/DisplayingCount";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import {connect} from "react-redux";

const Counter = (props) => {
    return (
        <div className={s.container}>
            <DisplayingCount message={props.isDisableInc && props.isDisableRes ?
                "enter values and press set" : null}/>
            <ButtonsBlock isDisableInc={props.isDisableInc} isDisableRes={props.isDisableRes} />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        isDisableInc: state.isDisableInc,
        isDisableRes: state.isDisableRes,
    }
};

const connectedCounter = connect(mapStateToProps, null)(Counter);

export default connectedCounter;
