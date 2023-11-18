import React from "react";
import { Button } from "../../button/Button";

export const TableBody = ({ rows, type, assignAdmin }) => {
  return (
    <tbody>
      {rows?.map((data) => (
        <tr key={data?.id || data?.uid}>
          {type === "products" ? (
            <>
              <td>{data?.id}</td>
              <td>{data?.price}</td>
              <td>{data?.description?.slice(0, 20)}...</td>
            </>
          ) : (
            <>
              <td>{data?.name}</td>
              <td>{data?.email}</td>
              <td>
                {data?.admin === null || data?.admin === false ? (
                  <Button
                    className="admin-btn"
                    onClick={() => assignAdmin(data, true)}
                  >
                    False
                  </Button>
                ) : (
                  <Button
                    className="admin-btn"
                    onClick={() => assignAdmin(data, false)}
                  >
                    True
                  </Button>
                )}
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
};
