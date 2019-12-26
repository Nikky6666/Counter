import React from 'react';
import s from './Input.module.css';


class Input extends React.Component {

    render() {
        const isRightInput = this.props.value.error ? false : true;
        return (
                <div className={s.container}>
                    <span className={s.description}>{this.props.description}</span>
                    <input type='number'
                           className={isRightInput ? `${s.input} ${s.notError}` : `${s.input} ${s.error}`}
                           value={this.props.value.number}
                           onChange={this.props.callbackFunk}
                    />
                </div>
        );
    }
}

export default Input;
