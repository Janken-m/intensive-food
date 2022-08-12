import React from 'react';
import { getCategories } from '../Service/fakeCategoryService';

function DropDown({label, name}) {
    const categories = getCategories();
    return (
<div className="mb-2 ms-2">
<label htmlFor={name} className="form-label">
          {label}
        </label>
  <select className="form-select" id="category">
   {categories.map((categorie) => (
       <option key={categorie._id}> {categorie.name}</option>
   ))}
  </select>
</div>
    );
}

export default DropDown;