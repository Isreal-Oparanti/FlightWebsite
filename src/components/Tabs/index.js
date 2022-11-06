import React, { useState } from "react";

function Tabs({ items }) {
  const [current, setCurrent] = useState(0);
  return (
    <div
      className="tab1_container"
      style={{ width: "50%", fontSize: "11.83px" }}>
      {items.map((item, index) => {
        return (
          <div key={index} id={`tab${index}`} onClick={() => setCurrent(index)} className={`${current === index ? "tab1 active-tab" : "tab1"}`}>
            <span>{item.label}</span>
          </div>
        );
      })}
      {items.map(({ content: Content }, index) => {
        return (
          <section
            key={index}
            id={`content${index}`}
            className={`${
              current === index ? "tab-content1 active-content" : "tab-content"
            }`}>
            <Content />
          </section>
        );
      })}
    </div>
  );
}

export default Tabs;
