// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck(str) {
    let regex = /^1?(-|\s)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}\s?$|^1?(-|\s)?\(\d{3}\)(-|\s)?\d{3}(-|\s)?\d{4}\s?$/
    console.log(regex.test(str))
    return regex.test(str)
    
  }
  telephoneCheck("(555)555-5555")