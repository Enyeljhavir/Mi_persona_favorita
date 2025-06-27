let revealed = false;
let playing = false;
const audio = document.getElementById("bgMusic");
const messageBox = document.getElementById("hiddenMessage");
const fullText =
  "Y ya eres mi persona favorita...\nCada minuto a tu lado es genial 💖\nNo hay nadie en el mundo mundial\nque ame más que estar contigo.\nCada momento lo haces especial ✨";

function revealMessage() {
  if (revealed) return;
  let i = 0;
  revealed = true;
  messageBox.innerHTML = "";
  function typing() {
    if (i < fullText.length) {
      messageBox.innerHTML += fullText.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
}

function toggleMusic() {
  if (playing) {
    audio.pause();
  } else {
    audio.play();
  }
  playing = !playing;
}
