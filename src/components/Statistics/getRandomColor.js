const getRandomColor = () => {
  const color = () => {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${color()},${color()},${color()})`;
};

export default getRandomColor;
