import React, { useState, useEffect } from "react";
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
  let prepLength: number = props.prepSecond;
  let meditLength: number =
    props.hour * 3600 + props.minute * 60 + props.second;
  const [timeLeft, setTimeLeft] = useState(prepLength + meditLength);
  const [isStopped, setIsStopped] = useState(false);

  /* let display: string = psec === 0 ? String() : String(psec); */
  // 初回レンダー時、または timeLeft 変更時に実行。
  useEffect(() => {
    if (isStopped) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // cleanup: clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <h1>{getDisplay(meditLength, timeLeft)}</h1>
    </div>
  );
};
Timer.defaultProps = {
  hour: 0,
  minute: 0,
  second: 0,
  prepSecond: 0,
};
export default Timer;

// getDisplay:
// meditLength: settings 画面で設定された瞑想時間（秒）
// timeLeft: 瞑想完了までの残り時間（秒）
const getDisplay = (meditLength: number, timeLeft: number) => {
  let display = "";
  // 準備中の場合
  if (timeLeft > meditLength) {
    display = String(timeLeft - meditLength);
    return display;
  }
  // 瞑想中の場合
  /* } else if (timeLeft > 0) { */
  /*   let hour = Math.floor(timeLeft / 3600); */
  /*   let minute = Math.floor((timeLeft % 3600) / 60); */
  /*   let second = Math.floor(timeLeft % 60); */
  /*   display = */
  /*     String("00" + hour).slice(-2) + */
  /*     ":" + */
  /*     String("00" + minute).slice(-2) + */
  /*     ":" + */
  /*     String("00" + second).slice(-2); */
  /*   // 瞑想を延長している場合 */
  /* } else { */
  /*   let hour = Math.floor(-timeLeft / 3600); */
  /*   let minute = Math.floor((-timeLeft % 3600) / 60); */
  /*   let second = Math.floor(-timeLeft % 60); */
  /*   display = */
  /*     String("00" + hour).slice(-2) + */
  /*     ":" + */
  /*     String("00" + minute).slice(-2) + */
  /*     ":" + */
  /*     String("00" + second).slice(-2); */
  /* } */
  /* return display; */
  let hour = Math.floor(Math.abs(timeLeft) / 3600);
  let minute = Math.floor((Math.abs(timeLeft) % 3600) / 60);
  let second = Math.floor(Math.abs(timeLeft) % 60);
  display =
    String("00" + hour).slice(-2) +
    ":" +
    String("00" + minute).slice(-2) +
    ":" +
    String("00" + second).slice(-2);
  return display;
};
