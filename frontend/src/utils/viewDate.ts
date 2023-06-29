export const viewDate = (date: any) => {
  const newDate = new Date(date);
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const year = newDate.getFullYear();
  const formattedDate = month + " " + year;
  return formattedDate;
};
