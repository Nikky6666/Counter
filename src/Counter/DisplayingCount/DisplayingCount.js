import React from 'react';
import s from './DisplayingCount.module.css'

class DisplayingCount extends React.Component {
    render() {
        return (
            <div className={s.container}>
                {this.props.message ?
                    <div className={s.message}>{this.props.message}</div>:
                <div className={this.props.maxNumber === this.props.count ? s.max : s.notMax}>
                {this.props.count}
                </div>}
            </div>
        );
    }
};

export default DisplayingCount;