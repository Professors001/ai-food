const thaiMedDays: string[] = [
  "อาทิตย์",
  "จันทร์",
  "อังคาร",
  "พุธ",
  "พฤหัสบดี",
  "ศุกร์",
  "เสาร์",
];

export const formatDateToThaiMed = (dateString: string): string => {
  if (!dateString) return "";

  const date = new Date(dateString);

  // Check if the date is valid.
  if (isNaN(date.getTime())) {
    return dateString; // Return original string if format is incorrect.
  }

  const dayOfWeek = thaiMedDays[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1; // getMonth() is 0-indexed, so add 1.

  return `${dayOfWeek} - ${dayOfMonth}/${month}/${date.getFullYear()}`;
};
