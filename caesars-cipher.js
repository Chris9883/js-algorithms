// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let newString = "";
    for (let i = 0; i < str.length; i++){
      let char;
      if(str[i].match(/[A-Z]/i)){
        char = alphabet[(alphabet.indexOf(str[i])+13)%26];
        
      } else {
        char = str[i];
        console.log(char)
      }
      newString += char;
    }
    console.log(newString)
    return newString;
  }
  
  rot13("SERR PBQR PNZC");