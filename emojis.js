// fondo-emojis.js

const emojis = ["🧠", "🎯", "📚", "🎨", "⚙️", "❓"];

function crearEmoji() {
  const emoji = document.createElement("span");
  emoji.classList.add("emoji-flotante");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = 8 + Math.random() * 5 + "s";
  document.body.appendChild(emoji);

  // Eliminar después de desaparecer
  setTimeout(() => emoji.remove(), 12000);
}

setInterval(crearEmoji, 1000);
