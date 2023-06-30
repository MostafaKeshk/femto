export const getNextMonth = () => {
  let currentDate = new Date();
  let nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  );

  return nextMonth;
};
