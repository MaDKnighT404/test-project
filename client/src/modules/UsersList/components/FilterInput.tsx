import React from "react";

interface ListFilterProps {
  filterQuery: string;
  handleFilter: (query: string) => void;
}

const FilterInput = ({ filterQuery, handleFilter }: ListFilterProps) => {
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilter(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={filterQuery}
      onChange={handleQueryChange}
    />
  );
};

export default FilterInput;
