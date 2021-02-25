import React from "react";

const Input = ({ label, id, defaultValue, value, onChange }) => {
  return (
    <div>
      <label for={id}>
        {label}:
        <input
          id={id}
          value={value}
          onChange={onchange}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
};

export default Input;
