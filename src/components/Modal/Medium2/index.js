import React from "react";

const Medium2 = ({ content, setVisible }) => (
  <div className="AddUsers AddUsers_container">
    <div className="container UserPop-medium2_container">
      <div className="UserPop-up UserPop-medium2">
        <button className="close-btn" onClick={() => setVisible(false)}>
          &times;
        </button>
        {content}
      </div>
    </div>
  </div>
);
export default Medium2;
