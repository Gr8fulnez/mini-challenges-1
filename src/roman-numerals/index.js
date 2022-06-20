/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let total = 0
    let i = 0
    let input = roman.toLowerCase()

    let numerals = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
       }
       let ans = [];

    for (let i = 0; i< roman.length; i++){
      //if the next roman numeral is larger, than we know we have to subtract this number
     if(numerals[roman[i]] < numerals[roman[i+1]]){
      ans -= numerals[roman[i]]
   }
   //otherwise, add like normal
   else {
     ans += numerals[roman[i]]
   };
  }
  return ans
  };

module.exports = romanToDecimal;
