export const paginate = (totalItems: any, pageSize: any) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  return totalPages;
};
