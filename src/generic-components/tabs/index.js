import React, { useState } from "react";
import "./tabs.css";

export const Tabs = ({ selected: initialSelected = 0, children }) => {
  const [selected, setSelected] = useState(initialSelected);
  const handleChange = (index) => {
    setSelected(index);
  };

  return (
    <>
      <ul className="tabs-list">
        {React.Children.map(children, (elem, index) => (
          <li
            key={index}
            className={`tab ${index === selected ? "active-tab" : ""}`}
            onClick={() => handleChange(index)}
          >
            {elem.props.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {React.Children.toArray(children)[selected]}
      </div>
    </>
  );
};
