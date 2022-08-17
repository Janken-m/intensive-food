import React from "react";

function Input({ name, label, onChange, type, error, value, placeholder }) {
  return (
    <div className="mb-2 ms-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        className="form-control"
        id={name}
        name={name}
      />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
}

export default Input;
