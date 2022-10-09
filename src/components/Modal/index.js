import React from "react";
import Medium from "./Medium";
import Full from "./Full";

function Modal({ type, content, setVisible, visible }) {
  switch (type) {
    case "medium":
      return visible && <Medium content={content} setVisible={setVisible} />;
    case "full":
      return visible && <Full content={content} setVisible={setVisible} />;
    default:
      break;
  }
}

export default Modal;
