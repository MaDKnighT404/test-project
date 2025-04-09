import { useState, useEffect } from "react";

import type { User } from "../types";

const useSort = (initialUsers: User[]) => {
  const [sortBy, setSortBy] = useState<string>("ASC");
  const [sortedUsers, setSortedUsers] = useState<User[]>(initialUsers);

  useEffect(() => {
    const newSortedUsers = [...initialUsers].sort((a, b) => {
      if (sortBy === "ASC") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });

    setSortedUsers(newSortedUsers);
  }, [sortBy, initialUsers]);

  const handleSort = () => {
    setSortBy((prev) => (prev === "ASC" ? "DESC" : "ASC"));
  };

  return { sortedUsers, sortBy, handleSort };
};

export default useSort;
