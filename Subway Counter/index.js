let countEl = document.getElementById("count");
let logEl = document.getElementById("log");
let count = 0;

function addEl() {
  count += 1;
  countEl.textContent = count;
}

function saveEl() {
  console.log(count);
  let logStr = " " + count + " - ";
  logEl.textContent += logStr;
  count = 0;
}
