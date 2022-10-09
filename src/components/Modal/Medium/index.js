import React from "react";

const Medium = ({ content, setVisible }) => (
  <div className="AddUsers">
    <div className="UserPop-up">
      <button className="close-btn" onClick={() => setVisible(false)}>
        &times;
      </button>
      {content}
    </div>
    
  </div>
);
export default Medium;
