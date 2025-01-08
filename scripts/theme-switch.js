const buttonSwitch = document.getElementById("switch-button");

// Check and load lightmode from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const lightmode = localStorage.getItem("lightmode") === "true";
  if (lightmode) {
    document.body.classList.add("lightmode");
  }
});

buttonSwitch.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("lightmode");
  const lightmode = body.classList.contains("lightmode");
  localStorage.setItem("lightmode", lightmode);
});
