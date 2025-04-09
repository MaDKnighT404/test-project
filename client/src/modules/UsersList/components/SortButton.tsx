const SortButton = ({ sortBy, onSortClick }: { sortBy: string; onSortClick: () => void }) => {
  return <button onClick={onSortClick}>Sort by ({sortBy})</button>;
};

export default SortButton;
