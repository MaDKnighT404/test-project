import { useState } from "react";

import SubTitle from "./components/Subtitle";
import SortButton from "./components/SortButton";
import FilterInput from "./components/FilterInput";
import List from "./components/List";

import "./styles/UserList.scss";
import { useQuery } from "@tanstack/react-query";
import getUsers from "./api/getUsers";
import useSort from "./hooks/useSort";
import useFilter from "./hooks/useFilter";

const UserList = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchInterval: 10000,
    staleTime: 0,
  });

  const { sortedUsers, sortBy, handleSort } = useSort(users);
  const { filteredUsers, filterQuery, handleFilter } = useFilter(sortedUsers);

  return (
    <div className={"list-wrapper"}>
      <div className="list-header">
        <h1 className={"list-title"}>User List</h1>
        <SubTitle />
        <div className="list-actions">
          <SortButton sortBy={sortBy} onSortClick={handleSort} />
          <FilterInput filterQuery={filterQuery} handleFilter={handleFilter} />
        </div>
      </div>
      <div className="list-container">
        {error && <div>Error: {error.message}</div>}
        {isLoading && <div>Loading...</div>}
        {filteredUsers.length === 0 && !isLoading && <div>No users found</div>}
        {!isLoading && filteredUsers.length > 0 && <List filteredUsers={filteredUsers} />}
      </div>
    </div>
  );
};

export default UserList;
