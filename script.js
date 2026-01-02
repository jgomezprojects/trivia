// 🎵 Inicialización de audios (ajustado a tu ruta src/aud/)
const soundCorrect = new Audio("src/aud/correct answer.mp3");
const soundWrong = new Audio("src/aud/wrong answer.mp3");
const bgMusic = new Audio("src/aud/background.mp3");

// Configuración de música de fondo
bgMusic.loop = true;     // 🔁 Repetir sin fin
bgMusic.volume = 0.2;    // 🔉 Volumen suave

// Variable para controlar si el sonido está activo
let sonidoActivo = true;

// ✅ Función para reproducir sonido de acierto
function playCorrectSound() {
  soundCorrect.currentTime = 0;
  soundCorrect.play();
}

// ❌ Función para reproducir sonido de error
function playWrongSound() {
  soundWrong.currentTime = 0;
  soundWrong.play();
}

// Elementos del DOM
const mainMenu = document.getElementById("mainMenu");
const quiz = document.getElementById("quiz");
const resultScreen = document.getElementById("resultScreen");
const questionEl = document.getElementById("question");
const questionImage = document.getElementById("questionImage");
const answersEl = document.getElementById("answers");
const hitsEl = document.getElementById("hits");
const resultText = document.getElementById("resultText");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");

// =================== PREGUNTAS ===================
const data = {
  ciencia: {
    facil: [
      {
        pregunta: "¿Cuál es el planeta más cercano al Sol?",
        opciones: ["Venus", "Mercurio", "Marte", "Tierra"],
        correcta: "Mercurio",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
      },
      {
        pregunta: "¿Cuántos huesos tiene el cuerpo humano adulto?",
        opciones: ["206", "210", "190", "250"],
        correcta: "206",
        img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
      },
      {
        pregunta: "¿Qué gas respiramos principalmente para vivir?",
        opciones: ["Hidrógeno", "Oxígeno", "Dióxido de carbono", "Nitrógeno"],
        correcta: "Oxígeno",
        img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién desarrolló la teoría de la relatividad?",
        opciones: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correcta: "Albert Einstein",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
      },
      {
        pregunta: "¿Qué partícula tiene carga negativa?",
        opciones: ["Protón", "Electrón", "Neutrón", "Positrón"],
        correcta: "Electrón",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Atom_diagram.png/800px-Atom_diagram.png"
      },
      {
        pregunta: "¿Qué órgano produce la insulina?",
        opciones: ["Hígado", "Páncreas", "Corazón", "Riñón"],
        correcta: "Páncreas",
        img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
      },
      {
        pregunta: "¿Qué fuerza nos mantiene en la Tierra?",
        opciones: ["Fuerza magnética", "Gravedad", "Fuerza centrífuga", "Energía cinética"],
        correcta: "Gravedad",
        img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
      },
      {
        pregunta: "¿Cuál es el metal más ligero?",
        opciones: ["Hierro", "Litio", "Cobre", "Aluminio"],
        correcta: "Litio",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
      }
    ],
    dificil: [
      {
        pregunta: "¿Cuál es la fórmula química del ozono?",
        opciones: ["O2", "O3", "CO2", "N2O"],
        correcta: "O3",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ozone-CRC-MW-3D-balls.png/800px-Ozone-CRC-MW-3D-balls.png"
      },
      {
        pregunta: "¿Qué científico propuso las leyes del movimiento planetario?",
        opciones: ["Kepler", "Copérnico", "Newton", "Einstein"],
        correcta: "Kepler",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Johannes_Kepler_1610.jpg/800px-Johannes_Kepler_1610.jpg"
      },
      {
        pregunta: "¿Cuál es el elemento más abundante en el universo?",
        opciones: ["Helio", "Hidrógeno", "Oxígeno", "Carbono"],
        correcta: "Hidrógeno",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hydrogen_atom.svg/800px-Hydrogen_atom.svg.png"
      },
      {
        pregunta: "¿Qué tipo de célula no tiene núcleo?",
        opciones: ["Eucariota", "Procariota", "Vegetal", "Animal"],
        correcta: "Procariota",
        img: "https://images.unsplash.com/photo-1532619675605-1ede6c7edf48?w=800&q=80"
      },
      {
        pregunta: "¿Qué parte del cerebro controla el equilibrio?",
        opciones: ["Cerebelo", "Corteza frontal", "Tálamo", "Tronco encefálico"],
        correcta: "Cerebelo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/1307_The_Cerebellum.jpg/800px-1307_The_Cerebellum.jpg"
      },
      {
        pregunta: "¿Cuál es la velocidad de la luz en el vacío?",
        opciones: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
        correcta: "300,000 km/s",
        img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80"
      },
      {
        pregunta: "¿Qué vitamina produce el cuerpo al exponerse al sol?",
        opciones: ["Vitamina C", "Vitamina D", "Vitamina B12", "Vitamina A"],
        correcta: "Vitamina D",
        img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80"
      }
    ]
  },
  deporte: {
    facil: [
      {
        pregunta: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
        opciones: ["9", "10", "11", "12"],
        correcta: "11",
        img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
      },
      {
        pregunta: "¿En qué deporte se usa una raqueta?",
        opciones: ["Tenis", "Fútbol", "Baloncesto", "Boxeo"],
        correcta: "Tenis",
        img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80"
      },
      {
        pregunta: "¿Qué país ganó el Mundial de Fútbol 2018?",
        opciones: ["Alemania", "Brasil", "Francia", "Argentina"],
        correcta: "Francia",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién tiene más títulos de Fórmula 1?",
        opciones: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Fernando Alonso"],
        correcta: "Lewis Hamilton",
        img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
      },
      {
        pregunta: "¿Cuánto dura un partido de baloncesto de la NBA?",
        opciones: ["40 minutos", "48 minutos", "90 minutos", "60 minutos"],
        correcta: "48 minutos",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80"
      },
      {
        pregunta: "¿Qué país organiza los Juegos Olímpicos 2024?",
        opciones: ["Estados Unidos", "Francia", "Japón", "China"],
        correcta: "Francia",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
      },
      {
        pregunta: "¿Qué jugador de fútbol es conocido como 'La Pulga'?",
        opciones: ["Cristiano Ronaldo", "Messi", "Neymar", "Mbappé"],
        correcta: "Messi",
        img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
      },
      {
        pregunta: "¿Cuántos Grand Slam hay en tenis?",
        opciones: ["2", "3", "4", "5"],
        correcta: "4",
        img: "https://cdn.pixabay.com/photo/2020/11/27/18/59/tennis-5782695_1280.jpg"
      }
    ],
    dificil: [
      {
        pregunta: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
        opciones: ["1896", "1900", "1924", "1888"],
        correcta: "1896",
        img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
      },
      {
        pregunta: "¿Qué boxeador fue apodado 'El más grande'?",
        opciones: ["Mike Tyson", "Muhammad Ali", "Rocky Marciano", "Floyd Mayweather"],
        correcta: "Muhammad Ali",
        img: "https://images.unsplash.com/photo-1546524279-471adc649f2b?w=800&q=80"
      },
      {
        pregunta: "¿Qué selección ha ganado más Copas del Mundo?",
        opciones: ["Italia", "Alemania", "Brasil", "Argentina"],
        correcta: "Brasil",
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80"
      },
      {
        pregunta: "¿En qué deporte se utiliza el término 'birdie'?",
        opciones: ["Golf", "Béisbol", "Tenis", "Rugby"],
        correcta: "Golf",
        img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80"
      },
      {
        pregunta: "¿Cuántos rounds tiene un combate profesional de boxeo?",
        opciones: ["10", "12", "15", "8"],
        correcta: "12",
        img: "https://images.unsplash.com/photo-1546524279-471adc649f2b?w=800&q=80"
      },
      {
        pregunta: "¿Qué país ganó el Mundial de fútbol de 2006?",
        opciones: ["Brasil", "Italia", "Alemania", "Francia"],
        correcta: "Italia",
        img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80"
      },
      {
        pregunta: "¿En qué país nació Usain Bolt?",
        opciones: ["Jamaica", "EEUU", "Canadá", "Sudáfrica"],
        correcta: "Jamaica",
        img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
      }
    ]
  },
  // 🔥 CULTURA Y ARTE AÑADIDOS ABAJO 🔥
  cultura: {
    facil: [
      {
        pregunta: "¿En qué continente está Egipto?",
        opciones: ["Asia", "África", "Europa", "América"],
        correcta: "África",
        img: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&q=80"
      },
      {
        pregunta: "¿Qué idioma se habla principalmente en Brasil?",
        opciones: ["Español", "Portugués", "Inglés", "Francés"],
        correcta: "Portugués",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
      },
      {
        pregunta: "¿Cuál es la capital de España?",
        opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correcta: "Madrid",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Miguel Ángel"],
        correcta: "Da Vinci",
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
      },
      {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        opciones: ["Inglés", "Chino mandarín", "Español", "Árabe"],
        correcta: "Chino mandarín",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
      },
      {
        pregunta: "¿Qué ciudad es conocida como la ciudad eterna?",
        opciones: ["Atenas", "Roma", "París", "Estambul"],
        correcta: "Roma",
        img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80"
      },
      {
        pregunta: "¿Cuál es el país con más habitantes del mundo?",
        opciones: ["India", "China", "EE.UU.", "Rusia"],
        correcta: "China",
        img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
      },
      {
        pregunta: "¿Qué moneda se usa en Japón?",
        opciones: ["Yen", "Won", "Peso", "Dólar"],
        correcta: "Yen",
        img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
      }
    ],
    dificil: [
      {
        pregunta: "¿Qué civilización construyó Machu Picchu?",
        opciones: ["Azteca", "Inca", "Maya", "Olmeca"],
        correcta: "Inca",
        img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80"
      },
      {
        pregunta: "¿Qué país inventó la pólvora?",
        opciones: ["China", "Japón", "India", "Corea"],
        correcta: "China",
        img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
      },
      {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        opciones: ["K2", "Everest", "Makalu", "Annapurna"],
        correcta: "Everest",
        img: "https://cdn.pixabay.com/photo/2019/12/21/13/49/nepal-4710522__480.jpg"
      },
      {
        pregunta: "¿En qué país nació Aristóteles?",
        opciones: ["Grecia", "Italia", "Egipto", "Turquía"],
        correcta: "Grecia",
        img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80"
      },
      {
        pregunta: "¿Qué país es conocido como la tierra del sol naciente?",
        opciones: ["Japón", "China", "Corea", "Filipinas"],
        correcta: "Japón",
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
      },
      {
        pregunta: "¿Qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1941", "1945", "1936"],
        correcta: "1939",
        img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
      },
      {
        pregunta: "¿Qué país tiene forma de bota?",
        opciones: ["Italia", "Grecia", "España", "Francia"],
        correcta: "Italia",
        img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80"
      }
    ]
  },
  arte: {
    facil: [
      {
        pregunta: "¿Quién pintó La noche estrellada?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correcta: "Van Gogh",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
      },
      {
        pregunta: "¿Cuál es el instrumento principal en una orquesta?",
        opciones: ["Violín", "Piano", "Guitarra", "Trompeta"],
        correcta: "Violín",
        img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
      },
      {
        pregunta: "¿Qué arte usa arcilla como material?",
        opciones: ["Escultura", "Pintura", "Música", "Danza"],
        correcta: "Escultura",
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Qué artista pintó 'El Guernica'?",
        opciones: ["Dalí", "Picasso", "Velázquez", "Monet"],
        correcta: "Picasso",
        img: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"
      },
      {
        pregunta: "¿Qué corriente artística representa sueños y el subconsciente?",
        opciones: ["Cubismo", "Surrealismo", "Realismo", "Impresionismo"],
        correcta: "Surrealismo",
        img: "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Persistence_of_Memory.jpg"
      },
      {
        pregunta: "¿Qué famoso escultor hizo 'El Pensador'?",
        opciones: ["Rodin", "Miguel Ángel", "Donatello", "Bernini"],
        correcta: "Rodin",
        img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
      },
      {
        pregunta: "¿En qué país nació Pablo Picasso?",
        opciones: ["España", "Francia", "Italia", "Portugal"],
        correcta: "España",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pablo_Picasso%2C_1901%2C_Le_Boulevardier%2C_oil_on_canvas%2C_82_x_65_cm%2C_Art_Gallery_of_Ontario.jpg/800px-Pablo_Picasso%2C_1901%2C_Le_Boulevardier%2C_oil_on_canvas%2C_82_x_65_cm%2C_Art_Gallery_of_Ontario.jpg"
      },
      {
        pregunta: "¿Qué material usa un pintor al óleo?",
        opciones: ["Tinta", "Pigmento y aceite", "Acrílico", "Grafito"],
        correcta: "Pigmento y aceite",
        img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
      }
    ],
    dificil: [
      {
        pregunta: "¿Quién pintó la Capilla Sixtina?",
        opciones: ["Miguel Ángel", "Da Vinci", "Rafael", "Caravaggio"],
        correcta: "Miguel Ángel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Michelangelo%27s_Piet%C3%A0_5450_cut_out_black.jpg/800px-Michelangelo%27s_Piet%C3%A0_5450_cut_out_black.jpg"
      },
      {
        pregunta: "¿Qué pintor es famoso por cortar parte de su oreja?",
        opciones: ["Van Gogh", "Rembrandt", "Monet", "Cézanne"],
        correcta: "Van Gogh",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_with_Bandaged_Ear_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_with_Bandaged_Ear_-_Google_Art_Project.jpg"
      },
      {
        pregunta: "¿Qué movimiento artístico lideró Claude Monet?",
        opciones: ["Impresionismo", "Cubismo", "Surrealismo", "Futurismo"],
        correcta: "Impresionismo",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
      },
      {
        pregunta: "¿Quién pintó 'La última cena'?",
        opciones: ["Da Vinci", "Rafael", "Caravaggio", "Botticelli"],
        correcta: "Da Vinci",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_2.jpg/800px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_2.jpg"
      },
      {
        pregunta: "¿Quién pintó 'El jardín de las delicias'?",
        opciones: ["leonardo da vinci", "pieter brueghel", "el bosco", "caravaggio"],
        correcta: "el bosco",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/El_jard%C3%ADn_de_las_Delicias%2C_de_El_Bosco.jpg/800px-El_jard%C3%ADn_de_las_Delicias%2C_de_El_Bosco.jpg"
      },
      {
        pregunta: "¿Qué pintura muestra a una mujer con una sonrisa misteriosa?",
        opciones: ["Mona Lisa", "La Gioconda", "Ambas son correctas", "Ninguna"],
        correcta: "Ambas son correctas",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      },
      {
        pregunta: "¿Qué escultor realizó 'David'?",
        opciones: ["Miguel Ángel", "Bernini", "Donatello", "Rafael"],
        correcta: "Miguel Ángel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Michelangelo%27s_David_-_right_view_2.jpg/800px-Michelangelo%27s_David_-_right_view_2.jpg"
      }
    ]
  }
};
// =================== EVENTOS ===================
document.querySelectorAll("#levels button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#levels button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedLevel = btn.dataset.level;
  });
});

document.querySelectorAll("#areas button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#areas button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedArea = btn.dataset.area;
  });
});

document.getElementById("startBtn").addEventListener("click", () => {
  if (!selectedLevel || !selectedArea) {
    alert("Selecciona un nivel y un área antes de comenzar.");
    return;
  }

  questions = data[selectedArea][selectedLevel];
  currentQuestion = 0;
  score = 0;

  mainMenu.style.display = "none";
  quiz.style.display = "block";

  totalEl.textContent = questions.length;
  showQuestion();
});

// Botón para volver al menú principal
const confirmModal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

function volverAlMenu() {
  quiz.style.display = "none";
  resultScreen.style.display = "none";
  mainMenu.style.display = "block";

  // Resetear selecciones
  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  selectedLevel = null;
  selectedArea = null;
  currentQuestion = 0;
  score = 0;
  
  // Asegurar que la música continúe si el sonido está activo
  if (sonidoActivo && bgMusic.paused) {
    iniciarMusica();
  }
}

document.getElementById("backBtn").addEventListener("click", () => {
  confirmModal.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
  confirmModal.style.display = "none";
  volverAlMenu();
});

confirmNo.addEventListener("click", () => {
  confirmModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de él
confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) {
    confirmModal.style.display = "none";
  }
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.pregunta;
  questionImage.src = q.img;
  currentEl.textContent = currentQuestion + 1;
  hitsEl.textContent = score;

  answersEl.innerHTML = "";
  q.opciones.forEach(op => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.textContent = op;
    btn.addEventListener("click", () => selectAnswer(op, q.correcta, btn));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(opcion, correcta, btn) {
  const all = document.querySelectorAll(".answer");
  all.forEach(b => b.style.pointerEvents = "none");

  if (opcion === correcta) {
    btn.classList.add("correct");
    score++;
    playCorrectSound(); // ✅ sonido de acierto
  } else {
    btn.classList.add("incorrect");
    playWrongSound(); // ❌ sonido de error
    all.forEach(b => {
      if (b.textContent === correcta) b.classList.add("correct");
    });
  }

  hitsEl.textContent = score;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 1000);
}

function endGame() {
  quiz.style.display = "none";
  resultScreen.style.display = "block";

  // 🎧 Reproducir música al finalizar (si el sonido está activo)
  if (sonidoActivo) {
    bgMusic.play().catch(error => {
      console.warn("Error al reproducir música:", error);
    });
  }

  const incorrectas = questions.length - score;
  resultText.textContent = `Respondiste correctamente ${score} de ${questions.length} preguntas. Incorrectas: ${incorrectas}.`;
}

document.getElementById("finishBtn").addEventListener("click", () => {
  resultScreen.style.display = "none";
  mainMenu.style.display = "block";

  // 🎧 Asegurar que la música continúe si el sonido está activo
  if (sonidoActivo && bgMusic.paused) {
    iniciarMusica();
  }

  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  selectedLevel = null;
  selectedArea = null;
});

// 🎛️ Control de sonido global (🔊 / 🔇)
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
  sonidoActivo = !sonidoActivo;

  if (sonidoActivo) {
    // Reproducir música si está pausada
    if (bgMusic.paused) {
      bgMusic.play().catch(error => {
        console.warn("Error al reproducir música:", error);
      });
    }
    soundCorrect.muted = false;
    soundWrong.muted = false;
    bgMusic.muted = false;
    muteBtn.textContent = "🔊";
    musicaIniciada = true; // Marcar como iniciada
  } else {
    bgMusic.pause();
    soundCorrect.muted = true;
    soundWrong.muted = true;
    bgMusic.muted = true;
    muteBtn.textContent = "🔇";
  }
});

// 🎧 Función para iniciar música de fondo
function iniciarMusica() {
  if (sonidoActivo && bgMusic.paused) {
    bgMusic.play().catch(error => {
      console.warn("Error al reproducir música:", error);
    });
  }
}

// 🎧 Intentar reproducir música automáticamente al cargar (puede fallar por políticas del navegador)
window.addEventListener("load", () => {
  if (sonidoActivo) {
    // Intentar reproducir automáticamente
    iniciarMusica();
  }
});

// 🎧 Reproducir música en la primera interacción del usuario (cualquier clic en la página)
let musicaIniciada = false;
function intentarIniciarMusica() {
  if (!musicaIniciada && sonidoActivo && bgMusic.paused) {
    iniciarMusica();
    musicaIniciada = true;
  }
}

// Escuchar cualquier interacción del usuario
document.addEventListener("click", intentarIniciarMusica, { once: true });
document.addEventListener("touchstart", intentarIniciarMusica, { once: true });
document.addEventListener("keydown", intentarIniciarMusica, { once: true });

// También asegurar que se reproduzca al hacer clic en cualquier botón
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!musicaIniciada && sonidoActivo) {
      iniciarMusica();
      musicaIniciada = true;
    }
  });
});
