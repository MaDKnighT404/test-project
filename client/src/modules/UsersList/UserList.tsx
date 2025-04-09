import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FixedSizeList as List } from "react-window";

import SubTitle from "./components/Subtitle";
import SortButton from "./components/SortButton";
import FilterInput from "./components/FilterInput";
import User from "./components/User";

import useSort from "./hooks/useSort";
import useFilter from "./hooks/useFilter";
import getUsers from "./api/getUsers";

import { LIST_HEIGHT, ITEM_SIZE, LIST_WIDTH } from "./constants";
import "./styles/UserList.scss";

const UserList = () => {
  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    // refetchInterval: 10000,
    // staleTime: 0,
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
          {!isLoading && filteredUsers.length > 0 && (
            <List
              height={LIST_HEIGHT}
              itemSize={ITEM_SIZE}
              width={LIST_WIDTH}
              itemCount={filteredUsers.length}
            >
              {({ index, style }) => {
                const item = filteredUsers[index];
                return (
                  <div style={style}>
                    <User
                      key={item.id}
                      isactive={activeItemId === item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      onClick={handleItemClick}
                    />
                  </div>
                );
              }}
            </List>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
