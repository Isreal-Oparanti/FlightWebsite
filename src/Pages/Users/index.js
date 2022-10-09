import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import AddUser from "./components/Add";
import EditUser from "./components/Edit";

import editIcon from "../../Assets/images/edit.png";

const dummyUsers = [
  {
    name: "Abbott Micheal",
    code: "GNR",
    login: "CHB",
    homebase1: "SMJ",
    homebase2: "DGN",
    email: "Abbort@preairways.com",
    lastvisit: "14-12-2021 10:23 ",
    Ratings: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings1: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings2: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings3: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
  },
  {
    name: "Willson Smart",
    code: "GNR",
    login: "CHB",
    homebase1: "PDF",
    homebase2: "CHM",
    email: "Abbort@preairways.com",
    lastvisit: "14-12-2021 10:23 ",
    Ratings: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings1: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings2: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings3: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
  },
  {
    name: "Micheal Jackson",
    code: "GNR",
    login: "CHB",
    homebase1: "COP",
    homebase2: "CHM",
    email: "Abbort@preairways.com",
    lastvisit: "14-12-2021 10:23 ",
    Ratings: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings1: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings2: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
    Ratings3: { maps: ["CTP", "FA1"], mapTitles: "B762-762-2002R" },
  },
];
const userTableColumns = [
  { field: "name", label: "Name" },
  { field: "code", label: "Code" },
  { field: "login", label: "Login" },
  { field: "email", label: "Email" },
  { field: "status", label: "Status", type: "checkbox" },
  { field: "lastvisit", label: "Last Visit Date" },
];

function User() {
  const [users, setUsers] = useState(dummyUsers);
  const [user, setUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  function handleEditUser() {
    setEditUser(true);
  }

  return (
    <div className="UserApp">
      {newUser && (
        <Modal
          type="medium"
          content={<AddUser />}
          visible={newUser}
          setVisible={setNewUser}
        />
      )}
      {editUser && (
        <Modal
          type="full"
          content={<EditUser />}
          visible={editUser}
          setVisible={setEditUser}
        />
      )}
      <div className="SearchInputs">
        <input
          type="text"
          className="SearchInput"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <label>Filter users by: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>Active & Delected</option>
          <option>Active</option>
          <option>Delected</option>
          <option>All</option>
        </select>
      </div>
      <Table
        data={users}
        columns={[
          ...userTableColumns,
          {
            field: "edit",
            type: "button",
            label: "Full edit",
            icon: editIcon,
            event: handleEditUser,
          },
        ]}
      />

      <button
        className="AddUserButton"
        onClick={() => {
          setNewUser(true);
        }}>
        <span className="plus">+</span> NEW USER
      </button>
    </div>
  );
}
export default User;
