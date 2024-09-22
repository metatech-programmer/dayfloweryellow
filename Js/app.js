const sectionButtons = document.querySelector(".buttons");
const btnaudio = document.querySelector(".audio");
const btnAudioOne = document.querySelector(".audio_one");
const btnAudioOnes = document.querySelector(".audio_ones");
const btnAudioHappy = document.querySelector(".audio_F");
const audio = document.querySelector(".audioR");
const audioT = document.querySelector(".audioT");
const audioF = document.querySelector(".audioF");
const onflower = document.querySelector(".oneflower");
const flowers = document.querySelector(".flowers");
const sectionMessage = document.querySelector(".message");
const btnOneFlower = document.querySelector("#oneFlower");
const btnFlowersC = document.querySelector("#flowersC");
const happyFlowers = document.querySelectorAll(".happyFlowers");
const btnNextSad = document.querySelector(".btnNextSad");
const textCaminoSad = document.querySelector(".camino_sad");
const textCaminoHappy = document.querySelector(".camino_happy");
const imgRamo = document.querySelector(".ramoHappy");

for (let i = 0; i < 86; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", "/assets/happy.webp");
  img.setAttribute("alt", "happy");
  img.setAttribute("class", "happyFlowers");
  flowers.append(img);

  img.setAttribute(
    "style",
    `position: absolute; width:${Math.floor(Math.random() * 300)}px; bottom:${
      Math.floor(Math.random() * 10) + 1
    }px; right:${Math.floor(Math.random() * 100) + 1}%; left:${
      Math.floor(Math.random() * 100) + 1
    }%;`
  );
}

btnaudio.addEventListener("click", () => {
  fadeIn(audio, 2000).catch((error) => {
    console.error("Error al reproducir el audio:", error);
  });
});

btnAudioOne.addEventListener("click", () => {
  audioT.pause();
});
btnAudioOnes.addEventListener("click", () => {
  fadeIn(audioT, 2000).catch((error) => {
    console.error("Error al reproducir el audio:", error);
  });
});
btnAudioHappy.addEventListener("click", () => {
  audioF.play().catch((error) => {
    console.error("Error al reproducir el audio:", error);
  });
});

window.addEventListener("load", () => {
  btnAudioOnes.click();
  textCaminoHappy.setAttribute("style", "display: none;");
  textCaminoSad.setAttribute("style", "display: none;");
  imgRamo.setAttribute("style", "display: none;");
  audioF.pause();
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
  sectionMessage.setAttribute("style", "display: none; ");
});
btnFlowersC.addEventListener("click", () => {
  flowers.setAttribute("style", "display: flex; ");
  textCaminoHappy.setAttribute(
    "style",
    "display: flex; animation: aparicion 3s ease-in-out"
  );
  audio.pause();
  audioF.pause();
  btnAudioHappy.click();
  sectionMessage.setAttribute("style", "display: none; ");
  setTimeout(() => {
    imgRamo.setAttribute(
      "style",
      "display: flex; animation: aparicion 3s ease-in-out"
    );
  }, 10000);
});

btnNextSad.addEventListener("click", () => {
  flowers.setAttribute("style", "display: flex; ");
  textCaminoSad.setAttribute(
    "style",
    "display: flex; animation: aparicion 3s ease-in-out"
  );
  audio.pause();
  audioF.pause();
  btnAudioHappy.click();
  onflower.setAttribute("style", "display: none; ");
  setTimeout(() => {
    imgRamo.setAttribute(
      "style",
      "display: flex; animation: aparicion 3s ease-in-out"
    );
  }, 10000);
});

//
function fadeOut(audio, duration) {
  let volume = 1; // Volumen inicial
  const interval = 50; // Intervalo en milisegundos
  const fadeOutInterval = setInterval(() => {
    volume -= interval / duration;
    if (volume <= 0) {
      volume = 0;
      audio.pause();
      clearInterval(fadeOutInterval);
    }
    audio.volume = volume;
  }, interval);
}

function fadeIn(audio, duration) {
  let volume = 0; // Volumen inicial
  audio.volume = volume; // Asegúrate de que el volumen comience en 0
  audio.play();
  const interval = 50; // Intervalo en milisegundos
  const fadeInInterval = setInterval(() => {
    volume += interval / duration;
    if (volume >= 1) {
      volume = 1;
      clearInterval(fadeInInterval);
    }
    audio.volume = volume;
  }, interval);
}