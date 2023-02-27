const number = 12345;


let getNum = num => Number(num);

let numArr = Array.from(String(number),getNum);

for(i = 0; i <= numArr.length; i++) {
    console.log(numArr[i]);
}


let firstNumber = prompt('enter a number').toString();
let secondNumber = prompt('enter a number').toString();
let thirdNumber = prompt('enter a number').toString();

alert(firstNumber + secondNumber + thirdNumber);


