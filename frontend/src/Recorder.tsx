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
             <Typography id="Settings-label" variant="h3" component="h3" gutterBottom>
                Settings
            </Typography>
            <Typography id="meditation-label" variant="h5" component="h5" gutterBottom>
                Meditation time
            </Typography>
            <InputSlider label="H" step={1} max={23} default={0} />
            <InputSlider label="M" step={1} max={59} default={15} />
            <InputSlider label="S" step={1} max={59} default={0} />

            <Typography id="preparation-label" variant="h5" component="h5" gutterBottom>
                Preparation time
            </Typography>
            <InputSlider label="S" step={1} max={59} default={5}/>
            <h1> </h1>
            <Grid container spacing={2} alignItems="center">
                <Grid item >
                    <SettingRecordButton />
                </Grid>
                <Grid item>
                    <ChangeModeButton />
                </Grid>
            </Grid>
        </div>
    )
};


function SettingRecordButton() {
    const [state, setState] = useState(false);

    return <Button variant="contained" onClick={() => setState((m) => !m)}>Save to presets</Button>
}

function ChangeModeButton() {
    const [mode, setMode] = useState(false);

    return <Button variant="contained" onClick={() => setMode((m) => !m)}>{mode ? "Settings" : "Meditate"}</Button>
}

// function InputSlider(minvalue: number = 0, maxvalue: number = 59, stepValue: number = 1) {
const InputSlider = (props: any) => {
    const [value, setValue] = React.useState(props.default);

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
                        defaultValue={props.default}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={props.step}
                        min={0}
                        max={props.max}
                    />
                </Grid>
            </Grid>


        </div>
    )
}