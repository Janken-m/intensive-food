import React from "react";

function SearchBox({ value, onChange, placeholder = "" }) {
  return (
    <div className="mb-2 ms-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default SearchBox;
