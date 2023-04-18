//let numbers = document.querySelectorAll('.num');
let curOp = "";
let firstNum = "";
let secondNum = "";
let dis = document.getElementById('display');
dis.textContent = "0";
let equal = document.getElementById('equal');  
equal.addEventListener("click", (e) => {
   
    compute();

});

const numbers = document.querySelectorAll(".num");
document.addEventListener('DOMContentLoaded', () => {
  
        let numbers = document.querySelectorAll(".num");
        let op = document.querySelectorAll(".operator");
        numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
   
        addNum(e.target.innerText);
        display();
     
    });
    

});
op.forEach((oper) => {
    console.log(oper);
    oper.addEventListener("click", (e) => {
    // handle the click event
    
    getOp(e.target.innerText);
 
    });
});

});

function display() {
    if(secondNum != "") {
      //  console.log("test");
        dis.textContent = secondNum;
        
    }
}
function addNum(number) {
    if(firstNum.length < 5){
       //only add 1 decimal to a number at a time
        if(number === "." && firstNum.includes(".")) 
            return;

            secondNum += number;
    console.log(secondNum);
    }
}
function getOp(op){
    curOp = op;
    console.log(firstNum);
    console.log(secondNum);

    firstNum = secondNum;
    secondNum = "";
   
    

}

function compute(){
    console.log(firstNum);
    console.log(curOp);
    console.log(secondNum);
    let res = '0';

    let num1 = parseInt(firstNum);
    let num2 = parseInt(secondNum);
        if(curOp === "+"){
            res = num1+num2;
            console.log(res);
        }
        if(curOp === "-"){
            res = num1-num2;
            console.log(res);
        }
        if(curOp === "*"){
            res = num1 * num2;
            console.log(res);
        }
        if(curOp === "/"){
            if(num2 === 0){
                res = "can't divide by zero, invalid";
                dis.textContent = res;
                clear();
            }
            else{
            res = num1/num2;
            console.log(res);
            }
        }
        let full = firstNum + "  " + curOp + "  " + secondNum + " = " + res;
        dis.textContent = full;
       
}
function clear(){
 //   dis.textContent = res;
    firstNum = "";
    secondNum = "";
}