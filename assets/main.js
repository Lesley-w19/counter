const button5 = document.querySelector("#plusFive");
const button10 = document.querySelector("#plusTen");
const button15 = document.querySelector("#plusFifteen");
const button20 = document.querySelector("#plusTwenty");

const indicator = document.querySelector("#number-indicator");
const disp = document.querySelector("#display-heading");

const button = document.querySelectorAll("button");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = btn.getAttribute("value");
    disp.textContent = `added ${value}`;
    indicator.textContent = (
      parseInt(indicator.textContent) + parseInt(value)
    ).toString();
  });
});

// each button event listener

// button5.addEventListener("click", () => {
//   disp.textContent = "added 5";
//   indicator.textContent = (parseInt(indicator.textContent) + 5).toString();
// });

// button10.addEventListener("click", () => {
//   disp.textContent = "added 10";
//   indicator.textContent = (parseInt(indicator.textContent) + 10).toString();
// });

// button15.addEventListener("click", () => {
//   disp.textContent = "added 15";
//   indicator.textContent = (parseInt(indicator.textContent) + 15).toString();
// });

// button20.addEventListener("click", () => {
//   disp.textContent = "added 20";
//   indicator.textContent = (parseInt(indicator.textContent) + 20).toString();
// });
