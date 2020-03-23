
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const newArray = [];
  if (matrix === undefined || matrix.length === 0) {
    return [];
  } 
  matrix.forEach((array) => {
    if (matrix.indexOf(array) % 2 !== 0) {
      for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
      }
    } else {
      for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
      }
    }

  })
  return newArray;
}
