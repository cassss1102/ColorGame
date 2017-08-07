const randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const generateRandomColor = number => {
  let colorsArray = [];
  for (let i = 0; i < number; i++) {
    colorsArray.push(randomColor());
  }

  return colorsArray;
};

const pickColor = () => {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

let numOfSquares = 6;
let colors = [];
let pickedColor;
let sqr = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let btn = document.querySelector("#reset");
let modes = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (let i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function() {
      modes[0].classList.remove("selected");
      modes[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (let i = 0; i < sqr.length; i++) {
    sqr[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
      if ( clickedColor === pickedColor) {
        messageDisplay.textContent = "correct";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        btn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }

    });
  }
}

function reset() {
  colors = generateRandomColor(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  btn.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (let i = 0; i < sqr.length; i++) {
    if (colors[i]) {
      sqr[i].style.backgroundColor = colors[i];
    } else {
      sqr[i].style.display ="none";
    }
  }
  h1.style.backgroundColor = "rgb(103, 216, 251)";
}

btn.addEventListener("click", () => {
  reset();
});

const changeColors = color => {
  for (let i = 0; i < sqr.length; i++) {
    sqr[i].style.backgroundColor = color;
  }
};
