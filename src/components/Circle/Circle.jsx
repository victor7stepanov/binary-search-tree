import './Circle.css'
import React from 'react';

export const Circle = (props) => {
    return (
        <div className={'circle'}>
            <span className={'circle__title'}>Press Space</span>
            <div className={'circle__value'}>
                {props.value}
            </div>
        </div>
    );
};
