var containerEle = document.body.querySelector(".container");

var num1 = Number(prompt("What is your total bill"));
var num2 = Number(prompt("What is the tax percentage"));
var num3 = Number(prompt("What is the tip percentage"));

var sum = (num1 * num2) + num1 * num3 + num1;

sum = Math.ceil(sum);

containerEle.innerHTML=sum;