const body = document.body;
const button = document.querySelector(".btn");

var isclicked = false;
var setIntervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 25);
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  console.log(setIntervalId);
  if (isclicked) {
    setIntervalId = setInterval(() => {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 25);
      let rgb = `rgb(${red}, ${green}, ${blue})`;
      body.style.background = rgb;
    }, 1000);
    isclicked=false;
  } else {
    button.innerHTML = body.style.background;
    clearInterval(setIntervalId);
    isclicked=true;
  }
});
