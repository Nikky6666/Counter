import React from 'react';
import s from '../CommonStyles/Block.module.css';
import ValuesBlock from "./ValuesBlock/ValuesBlock";
import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";


const SetValues = () => {
    return (
        <div className={s.container}>
            <ValuesBlock/>
            <ButtonsBlock/>
        </div>
    );
};

export default SetValues;
