import React from "react";

interface ErrorProp {
  children: React.ReactNode;
}

const ErrorComponent: React.FC<ErrorProp> = ({ children }) => {
  return (
    <div className="error">{children}</div>
  );
};

export default ErrorComponent;
