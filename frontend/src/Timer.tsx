import React from 'react';
import { Grid } from '@material-ui/core'

interface TimerProps {
    hour: number,
    minute: number,
    second: number,
};

const Timer = (props: TimerProps) => {
    return (
        <div className="timer">
            <h1>{props.hour}</h1> 
            <h2>{props.minute}</h2>
            <h3>{props.second}</h3>
        </div>
    );
};
export default Timer;
