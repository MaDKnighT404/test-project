export const matchesFilter = (value: string | number, query: string): boolean => {
  return String(value).toLowerCase().includes(query.toLowerCase());
};
