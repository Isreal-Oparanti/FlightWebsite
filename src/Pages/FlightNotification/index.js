import React from "react";

import { Wrapper } from "./styles";

//General Components
import Table from "../../components/Table";

const table_data = [
  {
    name: "OCC",
    operator: "ZZZ_P",
    grouping: "aircraft",
    show: "active",
    recipients: "",
  },
  {
    name: "Sales",
    operator: "ZZZ_P",
    grouping: "aircraft",
    show: "in-active",
    recipients: "",
  },
];

const table_fields = [
  { field: "name", label: "Name", type: "sort-search" },
  { field: "operator", label: "Operator" },
  { field: "grouping", label: "Grouping" },
  { field: "show", label: "Show", type: "sort" },
  { field: "recipients", label: "Recipients" },
];

function FlightNotification() {
  return (
    <Wrapper>
      <button>Add</button>
      <Table data={table_data} columns={table_fields} />
    </Wrapper>
  );
}

export default FlightNotification;
