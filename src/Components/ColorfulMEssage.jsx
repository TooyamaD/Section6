import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contenStyle = {
    color: color,
    fontSize: "18px"
  };

  return (
    <>
      <p style={contenStyle}>{children}</p>
    </>
  );
};

export default ColorfulMessage;
