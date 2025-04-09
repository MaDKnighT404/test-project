import { useState, useEffect } from "react";

import type { User } from "../types";
import { matchesFilter } from "../helpers";

const useFilter = (users: User[]) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [filterQuery, setFilterQuery] = useState<string>("");

  const handleFilter = (newQuery: string) => {
    setFilterQuery(newQuery);
  };

  useEffect(() => {
    if (filterQuery.length > 0) {
      const filtered = users.filter(
        (user) => matchesFilter(user.id, filterQuery)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [filterQuery, users]);

  return { filteredUsers, filterQuery, setFilterQuery, handleFilter };
};

export default useFilter;
