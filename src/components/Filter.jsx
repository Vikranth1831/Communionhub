import React from "react";

function Filter({ setFilter }) {
  return (
    <select onChange={(e) => setFilter(e.target.value)} className="form-select mb-3">
      <option value="">All Categories</option>
      <option value="Religious">Religious</option>
      <option value="Social">Social</option>
      <option value="Charity">Charity</option>
    </select>
  );
}

export default Filter;
