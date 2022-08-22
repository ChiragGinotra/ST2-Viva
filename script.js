const formButton = document.getElementById("cli-btn");
const homeButton = document.getElementById("undo");
const sliderButton = document.getElementById("slider");
const sectionForm = document.getElementById("section-form");
const openingPara = document.getElementById("openingPara");
const sectionSlider = document.getElementById("section-slider");

function showForm() {
  openingPara.style.display = "none";
  sectionForm.style.display = "block";
  sectionSlider.style.display = "none";
  formButton.style.backgroundColor = "#f0a500";
  homeButton.style.backgroundColor = "#ffffff";
  sliderButton.style.backgroundColor = "#ffffff";
}

function undo() {
  openingPara.style.display = "block";
  sectionForm.style.display = "none";
  sectionSlider.style.display = "none";
  sliderButton.style.backgroundColor = "#ffffff";
  formButton.style.backgroundColor = "#ffffff";
  homeButton.style.backgroundColor = "#f0a500";
}

function slider() {
  openingPara.style.display = "none";
  sectionForm.style.display = "none";
  sectionSlider.style.display = "block";
  sliderButton.style.backgroundColor = "#f0a500";
  formButton.style.backgroundColor = "#ffffff";
  homeButton.style.backgroundColor = "#ffffff";
}

formButton.addEventListener("click", showForm);
homeButton.addEventListener("click", undo);
sliderButton.addEventListener("click", slider);
