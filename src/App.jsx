import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contenStyle = {
    color: "blue",
    // キャメルケース
    fontSize: "18px"
  };

  return (
    <>
      {/* 　javaScriptでstyleを当てる。HTMLの中にjavaScriptを入れるためには{} その中の｛｝はオブジェクト */}
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <p style={contenStyle}>お元気ですか</p>
      {/* {}を入れるとそこにはjavaScriptが反映 */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
