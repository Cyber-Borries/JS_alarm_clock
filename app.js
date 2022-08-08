// declared all variables needed for app to work
const container = document.getElementsByClassName("container");
const clock = document.getElementsByClassName("clock");
const clockDisplay = document.getElementById("clockDisplay");
const onSwitch = document.getElementById("onSwitch");
// call the function for it to work
setInterval(setClock, 1000);
// created function that gets and displays the current time
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds();
  const minutesRatio = currentDate.getMinutes();
  const hoursRatio = currentDate.getHours();
  clockDisplay.innerHTML = ` <p>${hoursRatio} : ${minutesRatio} : ${secondsRatio} <p/>
  `;
}
// event listener for the button to switch the clock on or off
onSwitch.addEventListener("click", () => {
  clockDisplay.style.display == "none";
  clockDisplay.classList.toggle("active");
});
