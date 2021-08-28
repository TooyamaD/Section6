import React, { useState, useEffect } from "react";
import ColorfulMessage from "./Components/ColorfulMEssage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        flag || setFlag(true);
      } else {
        flag && setFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/* 　javaScriptでstyleを当てる。HTMLの中にjavaScriptを入れるためには{} その中の｛｝はオブジェクト */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      {/* {}を入れるとそこにはjavaScriptが反映 */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickFlag}>on/off</button>
      <p>{num}</p>
      {flag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;
