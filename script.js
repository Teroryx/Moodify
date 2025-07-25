function setMood(mood) {
  const body = document.body;
  const message = document.getElementById("message");

  if (mood === "happy") {
    body.style.background = "linear-gradient(135deg, #FFD700, #FFA500)";
    message.innerText = "Garde ce smile toute la journée ! 😄";
  } else if (mood === "sad") {
    body.style.background = "linear-gradient(135deg, #4B0082, #000000)";
    message.innerText = "C’est ok d’avoir un coup de mou... Prends soin de toi 💙";
  } else if (mood === "motivated") {
    body.style.background = "linear-gradient(135deg, #00C9A7, #0078AA)";
    message.innerText = "Rien ne peut t’arrêter aujourd’hui 💪🔥";
  }
}