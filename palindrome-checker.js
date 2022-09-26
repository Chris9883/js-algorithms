// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
    let string = str.replace(/[\W_]/g, "").toLowerCase();
    console.log(string)
    for (let i = 0; i < string.length; i++){
      if(string[i] !== string[string.length-i-1])
      return false
    }
    console.log(string)
    return true;
  }
  
  console.log(palindrome("race car"));