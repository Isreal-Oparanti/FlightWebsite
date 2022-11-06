import React from "react";

function List({ data, column }) {
  const { type, field, event, icon } = column;
  switch (type) {
    case "checkbox":
      return (
        <td>
          <input type="checkbox" defaultChecked="true" />
        </td>
      );
    case "button":
      return (
        <td>
          <button onClick={event ? event : () => {}} type="button">
            {/* {field} */}
            <img src={icon} alt="" />
          </button>
        </td>
      );
    default:
      return <td>{data[field]}</td>;
  }
}

export default function Table({ data, columns }) {
  return (
    <table className="UserTable" border="1">
      <thead>
        <tr className="UserTableHead">
          {columns.map((col, index) => (
            <td key={index}>{col.label}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="UserTableRow">
            {columns.map((column) => (
              <List data={row} column={column} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
