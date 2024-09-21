// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 14 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 30 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39 },

  { text: "Ella sabía que él sabía Que algún día pasaría", time: 44 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 49 },
  { text: "No te apures, no detengas El instante del encuentro", time: 57 },
  { text: "Está dicho que es un hecho", time: 60 },
  { text: "No la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 68 },

  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 },
  { text: "Él se acercó de repente la miro tan de frente", time: 107 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 115 },

  { text: "Ella sabía que él sabía Que algún día pasaría", time: 123 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 128 },
  { text: "No te apures, no detengas El instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 139 },
  { text: "No la pierdas, no hay derecho", time: 142 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 147 },

  { text: "Ella sabía que él sabía Que algún día pasaría", time: 168 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 173 },
  { text: "No te apures, no detengas El instante del encuentro", time: 181 },
  { text: "Está dicho que es un hecho", time: 184 },
  { text: "No la pierdas, no hay derecho", time: 187 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 192 },

  { text: "Ella sabía que él sabía Él sabía, ella sabía", time: 197 },
  { text: "Que él sabía, ella sabía Y se olvidaron de sus flores amarillas", time: 204 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);