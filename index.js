const MyButton = document.getElementById("MyButton");
const MyLabel1 = document.getElementById("MyLabel1");
const MyLabel2 = document.getElementById("MyLabel2");
const MyLabel3 = document.getElementById("MyLabel3");
const Min = 1;
const Max = 6;
let RandomNum1;
let RandomNum2;
let RandomNum3;

MyButton.onclick = function() {
    RandomNum1 = Math.floor(Math.random() * Max) + Min;
    RandomNum2 = Math.floor(Math.random() * Max) + Min;
    RandomNum3 = Math.floor(Math.random() * Max) + Min;
    MyLabel1.textContent = RandomNum1;
    MyLabel2.textContent = RandomNum2;
    MyLabel3.textContent = RandomNum3;
}