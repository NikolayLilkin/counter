let counter = 0;
let incrementVal = 1;

function increment() {
  counter = counter + incrementVal;
  document.getElementById("count").innerHTML = counter;
}

function decrement() {
  counter = counter - incrementVal;
  document.getElementById("count").innerHTML = counter;
}

function reset() {
  counter = 0;
  document.getElementById("count").innerHTML = counter;
}

function changeInputNumber() {
  incrementVal = parseInt(document.getElementById("input-number").value);
}
