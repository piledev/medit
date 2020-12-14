import React, { useState } from 'react'
import { Grid, Typography, Slider, Input, Button } from '@material-ui/core';
// import MuiIcons from '@material-ui/icons';
import './Recorder.css';

function valuetext(value: number) {
    return `${value} minute`;
}

export default function Recorder() {
    return (
        <div className="recorder">
            <Typography id="discrete-slider" variant="h3" component="h3" gutterBottom>
                Set a timer.
            </Typography>
            <InputSlider label="hour" step={1} max={23} />
            <InputSlider label="minute" step={1} max={59} />
            <InputSlider label="second" step={1} max={59} />
            <h1> </h1>
            <ChangeModeButton />
        </div>
    )
};

function ChangeModeButton() {
    const [mode, setMode] = useState(false);

    return <Button variant="contained" onClick={() => setMode((m) => !m)}>{mode ? "Set a timer" : "Start Meditation"}</Button>
}

// function InputSlider(minvalue: number = 0, maxvalue: number = 59, stepValue: number = 1) {
const InputSlider = (props: any) => {
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const handleInputChange = (event: any) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur: any = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > props.max) {
            setValue(props.max);
        }
    }

    return (
        <div className="slider">
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Typography id="inputsliderlabel" variant="h6" gutterBottom align="right">{props.label}</Typography>
                </Grid>
                <Grid item>
                    <Input
                        className="input"
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: props.step,
                            min: 0,
                            max: props.max,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={props.step}
                        marks
                        min={0}
                        max={props.max}
                    />
                </Grid>
            </Grid>


        </div>
    )
}