import React from "react";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <span className="material-icons" onClick={onSwitch} style={{ cursor: "pointer", fontSize: "32px" }}>
      {icon}
    </span>
  );
};

export default IconSwitch;
