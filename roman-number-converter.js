// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
    let number = num;
    let romanNumber="";
    
    let m = Math.floor(number / 1000);
    number = number - m*1000;
    while (m > 0) {
      romanNumber += ("M");
      m--;
    }
    
    let cm = Math.floor(number / 900);
    number = number - cm *900;
    while (cm > 0) {
      romanNumber += ("CM");
      cm--;
    }
  
    let d = Math.floor(number / 500);
    number = number - d * 500;
    while (d > 0) {
      romanNumber += ("D");
      d--;
    }
  
    let cd = Math.floor(number / 400);
    number = number - cd * 400;
    while (cd > 0) {
      romanNumber += ("CD");
      cd--;
    }
  
    let c = Math.floor(number / 100);
    number = number - c * 100;
    while (c > 0) {
      romanNumber += ("C");
      c--;
    }
  
    let xc = Math.floor(number / 90);
    number = number - xc * 90;
    while (xc > 0) {
      romanNumber += ("XC");
      xc--;
    }
  
    let l = Math.floor(number / 50);
    number = number - l * 50;
    while (l > 0) {
      romanNumber += ("L");
      l--;
    }
  
    let xl = Math.floor(number / 40);
    number = number - xl * 40;
    while (xl > 0) {
      romanNumber += ("XL");
      xl--;
    }
       
    let x = Math.floor(number / 10);
    number = number - x * 10;
    while (x > 0) {
       romanNumber += ("X");
       x--;
    }
  
    let ix = Math.floor(number / 9);
    number = number - ix * 9;
    while (ix > 0) {
       romanNumber += ("IX");
       ix--;
    }
  
    let v = Math.floor(number / 5);
    number = number - v * 5;
    while (v > 0) {
       romanNumber += ("V");
       v--;
    }
  
    let iv = Math.floor(number / 4);
    number = number - iv * 4;
    while (iv > 0) {
       romanNumber += ("IV");
       iv--;
    }
  
    let i = Math.floor(number / 1);
    number = number - i * 1;
    while (i > 0) {
       romanNumber += ("I");
       i--;
    }
    
    return romanNumber;
  }
  
  convertToRoman(798)