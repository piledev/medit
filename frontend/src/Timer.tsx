import React, { useState } from "react";
import { Grid } from "@material-ui/core";

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
  /* [remaining, setRemaining] = useState(0); */

  let prepStart: number = Date.now();
  let meditStart: number = prepStart + props.prepSecond * 1000;
  let meditGoal: number =
    meditStart +
    props.hour * 3600 * 1000 +
    props.minute * 60 * 1000 +
    props.second * 1000;

  // 現在時刻よりゴールを算出する
  //
  return (
    <div className="timer">
      <h1>{prepStart}</h1>
      <h1>{meditStart}</h1>
      <h1>{meditGoal}</h1>
    </div>
  );
};
export default Timer;

// js の clearInterval と setInterval(handler) を使ったらできそう。
