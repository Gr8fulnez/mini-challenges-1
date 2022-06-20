/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  function transpose(array) {
    let result = [];
    for (let row = 0; row < array.length; row++){
    for(let column = 0; column < array[row].length; column++){
      if(!result[column]){
        result[column] = []
      }
        result[column][row] = array[row][column];
    }
    }
    return result
  }
}
module.exports = transpose;
