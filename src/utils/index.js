export const removeFromArray = (array, index) => {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1)
  ];
};

export const addToArray = (array, index, element) => {
  return [
    ...array.slice(0, index),
    element,
    ...array.slice(index)
  ];
};
