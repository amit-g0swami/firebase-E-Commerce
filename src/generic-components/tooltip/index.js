import React, { useState } from "react";
import "./tooltip.css";

export const Tooltip = ({ text, position = "bottom", children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

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
    <>
      <div className="tooltip-container">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="tooltip-trigger"
        >
          {children}
        </div>
        {showTooltip && (
          <div
            className={`tooltip tooltip-${position}`}
            style={getTooltipStyle()}
          >
            {text}
          </div>
        )}
      </div>
    </>
  );
};
