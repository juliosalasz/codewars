function moveZeros(arr) {
  const arrayWithoutZeroes = arr.filter(function (value) {
    return value !== 0;
  });

  const arrayOfZeroes = arr.filter(function (zero) {
    return zero === 0;
  });

  const newArray = [...arrayWithoutZeroes, ...arrayOfZeroes];

  return newArray;
}
