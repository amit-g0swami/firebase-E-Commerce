import { TableComponent } from "../../generic-components/table/TableComponent";

export const ShowProduct = ({ products }) => {
  const column = [
    { title: "Id", key: "id" },
    { title: "Name", key: "name" },
    { title: "Description", key: "description" }
  ];
  const itemsPerPage = 10;
  return (
    <TableComponent
      type="products"
      rows={products}
      column={column}
      itemsPerPage={itemsPerPage}
    />
  );
};
