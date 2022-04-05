let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = [];

window.speechSynthesis.addEventListener("voiceschanged", () => {
  voices = window.speechSynthesis.getVoices();
  for (var i = 0; i < voices.length; i++)
  {
    var option = document.createElement("option");
    option.textContent = voices[i].name;
    option.value = i;
    let voiceSelect = document.querySelector("#voices");
    voiceSelect.appendChild(option);
  }
});

document.querySelector(".pitch").addEventListener("input", () => {
  const pitch = document.querySelector(".pitch").value;
  speech.pitch = pitch;
});

document.querySelector(".rate").addEventListener("input", () => {
  const rate = document.querySelector(".rate").value;
  speech.rate = rate;
});

document.querySelector(".volume").addEventListener("input", () => {
  const volume = document.querySelector(".volume").value;
  speech.volume = volume;
});

document.querySelector("#play").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#resume").addEventListener("click", () => {
  window.speechSynthesis.resume();
});

document.querySelector("#pause").addEventListener("click", () => {
  window.speechSynthesis.pause();
});

document.querySelector("#stop").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});
