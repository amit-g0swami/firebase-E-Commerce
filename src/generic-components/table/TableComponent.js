import { useState } from "react";
import { TableBody } from "./table-body";
import { TableFooter } from "./table-footer";
import { TableHeader } from "./table-header";

export const TableComponent = ({
  column,
  rows,
  itemsPerPage,
  type,
  assignAdmin
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = rows.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = rows.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-table-container">
      <table className="product-table">
        <TableHeader column={column} />
        <TableBody rows={currentItems} type={type} assignAdmin={assignAdmin} />
      </table>
      <TableFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
