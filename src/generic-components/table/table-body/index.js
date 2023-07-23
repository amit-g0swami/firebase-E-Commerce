import React from "react";

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
                  <button
                    className="admin-btn"
                    onClick={() => assignAdmin(data, true)}
                  >
                    False
                  </button>
                ) : (
                  <button
                    className="admin-btn"
                    onClick={() => assignAdmin(data, false)}
                  >
                    True
                  </button>
                )}
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
};
