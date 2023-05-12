export const spliterFunc = (data) => {
  return data.split(' ');
};

export const arrConverter = (data) => {
  const inputArr = [...data];
  const sortInputArr = inputArr.sort();
  const revInputArr = sortInputArr.reverse();

  return revInputArr;
};
