import React, { useState } from "react";

export const Tabs = ({ selected: initialSelected = 0, children }) => {
  const [selected, setSelected] = useState(initialSelected);

  const handleChange = (index) => {
    setSelected(index);
  };

  return (
    <>
      <ul
        style={{
          display: "flex",
          backgroundColor: "#f0f0f0",
          gap: "12px",
          paddingLeft: "4px",
        }}
      >
        {React.Children.map(children, (elem, index) => {
          const style =
            index === selected
              ? {
                  color: "#000",
                  borderBottom: "2px solid black",
                }
              : {
                  color: "#808080",
                };
          return (
            <li
              key={index}
              style={{
                cursor: "pointer",
                height: "40px",
                display: "flex",
                alignItems: "center",
                ...style,
              }}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div style={{ padding: "16px", border: "1px solid #ccc" }}>
        {React.Children.toArray(children)[selected]}
      </div>
    </>
  );
};
