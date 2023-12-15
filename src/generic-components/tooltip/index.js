import React, { useState } from "react";

export const Tooltip = ({ text, position = "bottom", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const getTooltipStyle = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translateY(-50%)" };
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          cursor: "pointer",
        }}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#333",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            zIndex: 50,
            ...getTooltipStyle(),
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
