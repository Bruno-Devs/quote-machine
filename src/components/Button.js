import React from "react";

const Button = ({onClick}) => {
  return (
    <div>
      <button id="new-quote" onClick={onClick}>
        New Quote
      </button>
    </div>
  );
};

export default Button;
