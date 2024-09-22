const sectionButtons = document.querySelector(".buttons");
const btnaudio = document.querySelector(".audio");
const btnAudioOne = document.querySelector(".audio_one");
const btnAudioOnes = document.querySelector(".audio_ones");
const audio = document.querySelector(".audioR");
const audioT = document.querySelector(".audioT");
const onflower = document.querySelector(".oneflower");
const sectionMessage = document.querySelector(".message");
const btnOneFlower = document.querySelector("#oneFlower");

btnaudio.addEventListener("click", () => {
  audio.play();
});

btnAudioOne.addEventListener("click", () => {
  audioT.stop();
});
btnAudioOnes.addEventListener("click", () => {
  audioT.play();
});

window.addEventListener("load", () => {
  btnAudioOnes.click(); 
});

setTimeout(() => {
  sectionButtons.setAttribute(
    "style",
    "display: flex; flex-direction: column; animation: aparicion 2s ease-in-out"
  );
  btnAudioOne.click();
}, 6500);

btnOneFlower.addEventListener("click", () => {
  onflower.setAttribute(
    "style",
    "display: flex; animation: animationFlower 20s forwards"
  );
  btnaudio.click();
  sectionMessage.setAttribute(
    "style",
    "display: none; animation: animationBacground 20s forwards"
  );
});

//
