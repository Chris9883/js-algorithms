// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
    let drawer = [...cid]
    let changeDue = cash - price;
    let change = [];
    let cashInDrawer = Math.round(cid.reduce((previousValue, unit) => { 
          return unit[1] + previousValue
    }, 0) * 100) / 100
  
    //return functions failure cases
    if (cashInDrawer < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    if (cashInDrawer == changeDue) {
      return {status: "CLOSED", change: [...cid]} ;
    }  
  
    // calculate change
    if (changeDue > 100) {
      let changeNeeded = Math.floor(changeDue / 100);
      let changeToArray = (Math.min(changeNeeded, drawer[8][1] / 100))
      change.push(["ONE HUNDRED", changeToArray * 100])
      changeDue -= changeToArray * 100;
    }
    if (changeDue > 20) {
      let changeNeeded = Math.floor(changeDue / 20)
      let changeToArray = (Math.min(changeNeeded, drawer[7][1] / 20))
      change.push(["TWENTY", changeToArray * 20])
      changeDue -= changeToArray * 20;
    }
    if (changeDue > 10) {
      let changeNeeded = Math.floor(changeDue / 10)
      let changeToArray = (Math.min(changeNeeded, drawer[6][1] / 10))
      change.push(["TEN", changeToArray * 10])
      changeDue -= changeToArray * 10;
    }
    if (changeDue > 5) {
      let changeNeeded = Math.floor(changeDue / 5)
      let changeToArray = (Math.min(changeNeeded, drawer[5][1] / 5))
      change.push(["FIVE", changeToArray * 5])
      changeDue -= changeToArray * 5;
    }
    if (changeDue > 1) {
      let changeNeeded = Math.floor(changeDue)
      let changeToArray = (Math.min(changeNeeded, drawer[4][1]))
      change.push(["ONE", changeToArray])
      changeDue -= changeToArray;
    }
    if (changeDue > 0.25) {
      let changeNeeded = Math.floor(changeDue / 0.25)
      let changeToArray = (Math.min(changeNeeded, drawer[3][1] / 0.25))
      change.push(["QUARTER", changeToArray * 0.25])
      changeDue -= changeToArray * 0.25;
    }
    if (changeDue > 0.1) {
      let changeNeeded = Math.floor(changeDue / 0.1)
      let changeToArray = (Math.min(changeNeeded, drawer[2][1] / 0.1))
      change.push(["DIME", changeToArray * 0.1])
      changeDue -= changeToArray * 0.1;
    }
    if (changeDue > 0.05) {
      let changeNeeded = Math.floor(changeDue / 0.05)
      let changeToArray = (Math.min(changeNeeded, drawer[1][1] / 0.05))
      change.push(["NICKEL", changeToArray * 0.05])
      changeDue -= changeToArray * 0.05;
    }
    if (changeDue > 0.01) {
      let changeNeeded = Math.floor(changeDue / 0.01)
      let changeToArray = (Math.min(changeNeeded, drawer[0][1] / 0.01))
      if (0.01 > (changeDue - changeToArray * 0.01) > 0){
        changeToArray +=1
      }
      change.push(["PENNY", changeToArray * 0.01])
      changeDue -= changeToArray * 0.01;
    }
    
    console.log(changeDue)
  
    //return statements after counting
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: [...change]}
    }
  
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))