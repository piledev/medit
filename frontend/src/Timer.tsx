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
            <h1>Timer</h1> 
        </div>
    );
};
export default Timer;
