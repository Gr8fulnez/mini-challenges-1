/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  function isValid(str) {
    let obj = {
      "(": ")",
      "[": "]",
      "{": "}",
    }

  let newArray= []
  for(let i = 0; i< str.length; i++)
  {
  if(obj[str[i]])
  {
    newArray.push(obj[str[i]])
  }else{
    if(newArray.pop() != str[i])
    return 'invalid'
  };
  }
  return newArray.length === 0;
  };

  module.exports = isValid;
}

module.exports = isValid;
