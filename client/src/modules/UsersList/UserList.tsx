import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SubTitle from "./components/Subtitle";
import SortButton from "./components/SortButton";
import FilterInput from "./components/FilterInput";
import User from "./components/User";

import useSort from "./hooks/useSort";
import useFilter from "./hooks/useFilter";
import getUsers from "./api/getUsers";

const UserList = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const { sortedUsers, sortBy, handleSort } = useSort(users);
  const { filteredUsers, filterQuery, handleFilter } = useFilter(sortedUsers);

  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const activeItemText = activeItemId !== null ? activeItemId : "Empty";

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className={"list-wrapper"}>
      <div className="list-header">
        <h1 className={"list-title"}>User List</h1>
        <SubTitle>{activeItemText}</SubTitle>
        <SortButton sortBy={sortBy} onSortClick={handleSort} />
        <FilterInput filterQuery={filterQuery} handleFilter={handleFilter} />
      </div>
      <div className="list-container">
        <div className="list">
          {error && <div>Error: {error.message}</div>}
          {isLoading && <div>Loading...</div>}
          {filteredUsers.length === 0 && !isLoading && <div>No users found</div>}
          {filteredUsers.map((item) => (
            <User
              key={item.id}
              isactive={activeItemId === item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
