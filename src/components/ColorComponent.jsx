import React from "react";

export default function colorComponent(props) {
  function onClicar() {
    props.onClicarPai(props.color);
  }

  function copyColor() {
    navigator.clipboard.writeText("#" + props.color);
  }

  return (
    <div
      className="colorComponent"
      id={props.color}
      style={{ background: "#" + props.color }}
      onClick={onClicar}
    >
      <div className="hoverColorComponent" onClick={copyColor}>
        <h3>RGB: #{props.color}</h3>
      </div>
    </div>
  );
}
