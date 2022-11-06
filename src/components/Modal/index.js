import React from "react";
import Medium from "./Medium";
import Medium2 from "./Medium2";
import Full from "./Full";

function Modal({ type, content, setVisible, visible }) { 
   
  switch (type) {
    case "medium":
      return visible && <Medium content={content} setVisible={setVisible} />;
    case "medium2":
      return visible && <Medium2 content={content} setVisible={setVisible} />;
    case "full":
      return visible && <Full content={content} setVisible={setVisible} />;
    default:
      break;
  }
}

export default Modal;
