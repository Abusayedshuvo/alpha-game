function hidden(elementById) {
  const element = document.getElementById(elementById);
  element.classList.add("hidden");
}

function show(elementById) {
  const element = document.getElementById(elementById);
  element.classList.remove("hidden");
}

function addBg(elementById) {
  const element = document.getElementById(elementById);
  element.classList.add("bg-[#FFA500]");
}

function removeBg(elementById) {
  const element = document.getElementById(elementById);
  element.classList.remove("bg-[#FFA500]");
}

function getRandomAlphabet() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");
  const random = Math.round(Math.random() * 25);
  const alpha = alphabets[random];
  return alpha;
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseInt(element.innerText);
  return value;
}

function setElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
