import { TableComponent } from "../../generic-components/table/TableComponent";
import { assignAdmin } from "../../services/admin-service";

export const ShowUsers = ({ users }) => {
  const changeAdminStatus = (data, updateAdmin) => {
    assignAdmin(data, updateAdmin);
  };
  const column = [
    { title: "Name", key: "name" },
    { title: "Email", key: "email" },
    { title: "IsAdmin", key: "isAdmin" }
  ];
  const itemsPerPage = 5;
  return (
    <TableComponent
      type="users"
      rows={users}
      column={column}
      itemsPerPage={itemsPerPage}
      assignAdmin={changeAdminStatus}
    />
  );
};
