//basic functions

let superAdd=function (...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }

let add= function (a,b) {
    return a+b;
}

let superMinus=function (...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous - current;
    });
  }

let minus=function(a,b) {
    return a-b;
} 

let superMultiply=function (...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous * current;
    });
  }

let multiply=function (a,b) {
    return a*b;
}

let superDivide=function (...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous / current;
    });
  }

let divide= function(a,b) {
    return a/b;
}

//function operate----------------
//function operate (a,y,operator) {
// if (operator==="-") {
//      superMinus;
//    };
// else if (operator==="+") {
//     return superPlus;
// }
//}


//event listener-need to use query selector all--query selector all cant add event listener

let div=document.querySelector("div")
let button=document.querySelector("button")
button.addEventListener("click", display)

function display(){
    div.textContent="123"
}