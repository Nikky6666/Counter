import React from 'react';
import s from './Button.module.css'

class Button extends React.Component {

     onMouseDown = (e) => {
        e.currentTarget.className=`${s.button} ${s.mouseDown}`;
    };

    onMouseUp = (e) => {
        e.currentTarget.className=`${s.button} ${s.mouseUp}`;
    }

    render() {
        return <button onClick={this.props.onClickFunction}
                       className={this.props.isDisabled? `${s.button} ${s.disabled}`: `${s.button} ${s.notDisabled}` }
                       disabled={this.props.isDisabled}
                       onMouseDown={this.onMouseDown}
                       onMouseUp={this.onMouseUp}
        >{this.props.title}</button>
    }
}

export default Button;