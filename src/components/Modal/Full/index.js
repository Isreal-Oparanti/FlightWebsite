
import React from "react";

const Full = ({ content, setVisible }) => (
  <div className="UserEdit">
    <div className="UserPop-Edit">
      <button className="back-btn" onClick={() => setVisible(false)}>
        <span className="btn-span">Back</span>&#171;&#171;
      </button>
      {content}
    </div>
  </div>
);
export default Full;
