import React from 'react'
import { Grid, Typography, Slider, Input } from '@material-ui/core';
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
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Typography id="minutes" variant="h6" gutterBottom>minutes:</Typography>
                </Grid>
                <Grid item xs>
                    <InputSlider />
                </Grid>
            </Grid>
        </div>
    )
};

// function InputSlider(minvalue: number = 0, maxvalue: number = 59, stepValue: number = 1) {
function InputSlider() {
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
        } else if (value > 60) {
            setValue(60);
        }
    }

    return (
        <div className="slider">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Input
                        className="input"
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 59,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={59}
                    />
                </Grid>
            </Grid>
        </div>
    )
}