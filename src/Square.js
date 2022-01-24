import React from "react";

const style = {
  background: "#bdc7f2",
  border: "2px solid #607aeb",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
