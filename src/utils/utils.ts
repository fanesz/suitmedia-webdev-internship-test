export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);
  const indonesianMonth = [
    "JANUARI",
    "FEBRUARI",
    "MARET",
    "APRIL",
    "MEI",
    "JUNI",
    "JULI",
    "AGUSTUS",
    "SEPTEMBER",
    "OKTOBER",
    "NOVEMBER",
    "DESEMBER",
  ];
  const day = parsedDate.getDate();
  const month = indonesianMonth[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return day + " " + month + " " + year;
};
