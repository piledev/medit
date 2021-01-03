import React from "react";
import { Grid } from "@material-ui/core";

interface TimerProps {
  hour: number;
  minute: number;
  second: number;
  countdownsec: number;
}

const Timer = (props: TimerProps) => {
  let hour = props.hour;
  let minute = props.minute;
  let second = props.second;
  let countdownsec = props.countdownsec;

  return (
    <div className="timer">
      <h1>{props.hour}</h1>
      <h2>{props.minute}</h2>
      <h1>{props.hour}</h1>
    </div>
  );
};
export default Timer;

// js の clearInterval と setInterval(handler) を使ったらできそう。
