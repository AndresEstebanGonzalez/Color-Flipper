const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function rgb() {
  let r = getRandomNumber();
  let g = getRandomNumber();
  let b = getRandomNumber();
  return r + "," + g + "," + b;
}

btn.addEventListener("click", function () {
  const colorGenerator = rgb();
  color.textContent = colorGenerator;
  document.body.style.backgroundColor = "rgb(" + colorGenerator + ")";
  document.getElementById("btn").style.backgroundColor =
    "rgb(" + colorGenerator + ")";
  document.getElementById("header-text").style.color =
    "rgb(" + colorGenerator + ")";
});

console.log(rgb());
console.log(rgb);
