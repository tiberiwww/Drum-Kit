window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function
  audio.currentTime = 0; //rewind to start
  audio.play();

  key.classList.toggle("playing");

  console.log(audio);
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it is not a transform;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => addEventListener("transitionend", removeTransition));
