import React from "react";
import ReactDom from "react-dom";

export default function ModalComponent(props) {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <div className="modal">
      <div className="overlayModal" onClick={props.setClose}></div>
      <div
        className="cardModal"
        style={{ background: "#" + props.color }}
      ></div>
    </div>,
    document.getElementById("portal")
  );
}
