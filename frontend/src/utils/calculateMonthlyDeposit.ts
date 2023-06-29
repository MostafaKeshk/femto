export const calculateMonthlyDeposit = (date: Date, total: number) => {
  if (!date || !total) return { monthlyDeposit: 0, months: 0 };

  const month: any = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const monthDifference = (year - currentYear) * 12 + (month - currentMonth);

  return { monthlyDeposit: total / monthDifference, months: monthDifference };
};
