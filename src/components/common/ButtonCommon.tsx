import React from "react";
import "./buttoncommon.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="button">
      <span className="py-2 mx-4 d-block">{children}</span>
    </button>
  );
};

export default Button;
