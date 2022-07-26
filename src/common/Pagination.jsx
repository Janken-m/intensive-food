import React from "react";

function Pagination({ itemCount, pageSize, onPageChange, currentPage }) {
  const pageCount = Math.ceil(itemCount / pageSize);

if (pageCount === 1) return null;

  const pages = range(1, pageCount);
  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
        key={page} 
         className={page === currentPage ? "page-item active" : "page-item"}>
          <button className="page-link" onClick={()=> onPageChange(page) }>{page}</button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;

//för att göra en arry med siffrorna upp till pageCount!
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}
