function getRandomInt() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function getRandomRange(min, max) {
  const maxValue = Math.ceil(min);
  const minValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export {
  getRandomInt, arrayRandElement, getRandomRange,
};
