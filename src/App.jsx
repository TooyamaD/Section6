import React, { useState } from "react";
import ColorfulMessage from "./Components/ColorfulMEssage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      {/* 　javaScriptでstyleを当てる。HTMLの中にjavaScriptを入れるためには{} その中の｛｝はオブジェクト */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      {/* {}を入れるとそこにはjavaScriptが反映 */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
