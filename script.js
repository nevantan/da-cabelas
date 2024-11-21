const yesButton = document.getElementById("age-yes");
const ageGate = document.getElementById("age-gate");

if (yesButton) {
  yesButton.addEventListener("click", () => {
    if (ageGate) ageGate.style.display = "none";
  });
}
