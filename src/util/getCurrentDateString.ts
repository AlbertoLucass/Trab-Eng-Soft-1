export const getCurrentDateString = () => {
  const unformattedDate = new Date(Date.now());

  const year = unformattedDate.getFullYear();
  const month = unformattedDate.getMonth() + 1;
  const day = unformattedDate.getDate();

  return `${year}-${month.toString().length === 1 ? '0' + month : month}-${
    day.toString().length === 1 ? '0' + day : day
  }`;
};
