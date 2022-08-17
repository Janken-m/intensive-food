import React from "react";

function DropDown({
  name,
  label,
  options,
  value,
  error,
  onChange,
  placeholder,
}) {
  return (
    <div className="mb-2 ms-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-select"
        id="category"
      >
        <option value=""> {placeholder} </option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
}

export default DropDown;
