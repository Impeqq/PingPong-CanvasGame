export const getRandom = (min: any, max: any) => {
  return Math.floor(Math.random() * (max - min) + min);
};
