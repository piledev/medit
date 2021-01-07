import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { display } from "@material-ui/system";

interface TimerProps {
  hour: number;
  minute: number;
  second: number;
  prepSecond: number;
}

// 1秒ごとにリターンするのがよいのか
// リターンするものの中に1秒ごとの処理を書くのがいいのか
// 最初にカウントダウン終了時刻を定めて、そこに向けてカウントダウンする方式にする
//
//
// return で返すタグの中の変数{  }が変わると、再レンダリングされるという性質がある。
// これを使って、useState で残り時間を保持
// return ないに {state} としておいて、
// setState(仮)を１秒毎に書き換えるという手を使うといいかも。
// useEffect で setInterval を行う必要はあるか？多分ないと思うが普通にやってだめだったときはやってみよう。
// あああ
//
//
const Timer = (props: TimerProps) => {
  const [display, setDisplay] = useState(String(props.prepSecond));

  let prepStart: number = Date.now();
  let meditStart: number = prepStart + props.prepSecond * 1000;
  let meditGoal: number =
    meditStart +
    props.hour * 3600 * 1000 +
    props.minute * 60 * 1000 +
    props.second * 1000;
  let distance: number = meditGoal - meditStart;

  /* const countdown = () => { */
  let x = setInterval(() => {
    if (Date.now() <= meditStart) {
      // 瞑想開始前（カウントダウン）
      setDisplay(String(Math.floor((meditStart - Date.now()) / 1000)));
    } else if (Date.now() <= meditGoal) {
      // 瞑想開始後（カウントダウン）
      distance = meditGoal - Date.now();
      let h: number = Math.floor(distance / (60 * 60 * 1000));
      let m: number = Math.floor((distance - h) / (60 * 1000));
      let s: number = Math.floor((distance - h - m) / 1000);
      setDisplay(String(h + ":" + m + ":" + s));
    } else {
      clearInterval(x);
    }
  }, 1000);
  /* }; */

  return (
    <div className="timer">
      <h1>{display}</h1>
    </div>
  );
};
export default Timer;

// js の clearInterval と setInterval(handler) を使ったらできそう。
