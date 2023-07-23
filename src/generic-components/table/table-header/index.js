import React from "react";

export const TableHeader = ({ column }) => {
  return (
    <thead>
      <tr>
        {column?.map((i) => (
          <td key={i.key}>{i.title}</td>
        ))}
      </tr>
    </thead>
  );
};
