import React from "react";
import { Button } from "../../button/Button";

const renderProductColumns = (data) => (
  <>
    <td>{data?.id}</td>
    <td>{data?.price}</td>
    <td>{data?.description?.slice(0, 20)}...</td>
  </>
);

const renderUserColumns = (data, assignAdmin) => (
  <>
    <td>{data?.name}</td>
    <td>{data?.email}</td>
    <td>
      <Button
        className="admin-btn"
        onClick={() => assignAdmin(data, !data?.admin)}
      >
        {data?.admin ? "True" : "False"}
      </Button>
    </td>
  </>
);

export const TableBody = ({ rows, type, assignAdmin }) => {
  return (
    <tbody>
      {rows?.map((data) => (
        <tr key={data?.id || data?.uid}>
          {type === "products"
            ? renderProductColumns(data)
            : renderUserColumns(data, assignAdmin)}
        </tr>
      ))}
    </tbody>
  );
};
