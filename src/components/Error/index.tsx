import React from "react";
import "./style.css";

type IErrorProps = {
  message: string;
};

function Error({ message }: IErrorProps) {
  return (
    <div className="error__wrapper">
      <div className="error">{message} ⚠️ </div>
    </div>
  );
}

export default Error;
