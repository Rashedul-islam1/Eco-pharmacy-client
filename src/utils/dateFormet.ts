export const formatDate = (date: any) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Add ordinal suffix
  const ordinalSuffix = (n: any) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return `${day}${ordinalSuffix(day)} ${month} ${year}`;
};
