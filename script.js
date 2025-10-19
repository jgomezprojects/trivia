
let selectedLevel = null;
let selectedArea = null;
let currentQuestion = 0;
let score = 0;
let questions = [];

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
        img: "https://www.shutterstock.com/image-vector/graphic-detailed-black-white-human-260nw-1281079798.jpg"
      },
      {
        pregunta: "¿Qué gas respiramos principalmente para vivir?",
        opciones: ["Hidrógeno", "Oxígeno", "Dióxido de carbono", "Nitrógeno"],
        correcta: "Oxígeno",
        img: "https://concepto.de/wp-content/uploads/2024/05/oxigeno-atomo.jpg"
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
        img: "https://concepto.de/wp-content/uploads/2018/10/electron1-e1539358047632.jpg"
      },
      {
        pregunta: "¿Qué órgano produce la insulina?",
        opciones: ["Hígado", "Páncreas", "Corazón", "Riñón"],
        correcta: "Páncreas",
        img: "https://media.istockphoto.com/id/1401150101/es/vector/p%C3%A1ncreas-vector-de-anatom%C3%ADa-de-%C3%B3rganos-internos-humanos-ilustraci%C3%B3n-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=jVyUuPgqN6qAEh0JK_Bi5Se-sZi7PwMDIPlvxiRmWb4="
      },
      {
        pregunta: "¿Qué fuerza nos mantiene en la Tierra?",
        opciones: ["Fuerza magnética", "Gravedad", "Fuerza centrífuga", "Energía cinética"],
        correcta: "Gravedad",
        img: "https://www.neurochispas.com/wp-content/uploads/2023/06/Aceleracion-de-la-gravedad-en-la-Tierra.png"
      },
      {
        pregunta: "¿Cuál es el metal más ligero?",
        opciones: ["Hierro", "Litio", "Cobre", "Aluminio"],
        correcta: "Litio",
        img: "https://litioargentina.com/wp-content/uploads/2024/09/Minerals_Zinc-mine-nugget-1100x472.jpg"
      }
    ],
    dificil: [
      {
        pregunta: "¿Cuál es la fórmula química del ozono?",
        opciones: ["O2", "O3", "CO2", "N2O"],
        correcta: "O3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmLUOJ56FZmDTTFgouKttQLC_nCSoUOlR5Q&s"
      },
      {
        pregunta: "¿Qué científico propuso las leyes del movimiento planetario?",
        opciones: ["Kepler", "Copérnico", "Newton", "Einstein"],
        correcta: "Kepler",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwKPC8rXqxwq4HCpoyeqKVsKxRQNLQszfqA&s"
      },
      {
        pregunta: "¿Cuál es el elemento más abundante en el universo?",
        opciones: ["Helio", "Hidrógeno", "Oxígeno", "Carbono"],
        correcta: "Hidrógeno",
        img: "https://energylab.es/wp-content/uploads/2024/03/Imagen-P%C3%ADldora-H2-Web.png"
      },
      {
        pregunta: "¿Qué tipo de célula no tiene núcleo?",
        opciones: ["Eucariota", "Procariota", "Vegetal", "Animal"],
        correcta: "Procariota",
        img: "https://cdn.kastatic.org/ka-perseus-images/c1c593f76311648675c9dd85eefc95a34e6cf643.png"
      },
      {
        pregunta: "¿Qué parte del cerebro controla el equilibrio?",
        opciones: ["Cerebelo", "Corteza frontal", "Tálamo", "Tronco encefálico"],
        correcta: "Cerebelo",
        img: "https://asociacioneducar.com/wp-content/uploads/cerebelo-AE-2.webp"
      },
      {
        pregunta: "¿Cuál es la velocidad de la luz en el vacío?",
        opciones: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
        correcta: "300,000 km/s",
        img: "https://i.blogs.es/4f887c/aguj/450_1000.jpg"
      },
      {
        pregunta: "¿Qué vitamina produce el cuerpo al exponerse al sol?",
        opciones: ["Vitamina C", "Vitamina D", "Vitamina B12", "Vitamina A"],
        correcta: "Vitamina D",
        img: "https://mejorconsalud.as.com/wp-content/uploads/2020/10/alimentos-vitamina-d.jpg"
      }
    ]
  },
  deporte: {
    facil: [
      {
        pregunta: "¿Cuántos jugadores hay en un equipo de fútbol en el campo?",
        opciones: ["9", "10", "11", "12"],
        correcta: "11",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Football_pitch.svg"
      },
      {
        pregunta: "¿En qué deporte se usa una raqueta?",
        opciones: ["Tenis", "Fútbol", "Baloncesto", "Boxeo"],
        correcta: "Tenis",
        img: "https://lazosdelagente.com/wp-content/uploads/2023/09/QUE-ES-EL-TENIS-Y-CUAL-ES-SU-IMPORTANCIA.png"
      },
      {
        pregunta: "¿Qué país ganó el Mundial de Fútbol 2018?",
        opciones: ["Alemania", "Brasil", "Francia", "Argentina"],
        correcta: "Francia",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FFrancia&psig=AOvVaw2thmj39BNIfOpTejF2x11z&ust=1760799150394000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIj1uZC-q5ADFQAAAAAdAAAAABAX"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién tiene más títulos de Fórmula 1?",
        opciones: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Fernando Alonso"],
        correcta: "Lewis Hamilton",
        img: "https://hips.hearstapps.com/hmg-prod/images/lewis-hamilton-of-great-britain-and-mercedes-walks-in-the-news-photo-1722974620.jpg?crop=0.668xw:1.00xh;0.330xw,0&resize=640:*"
      },
      {
        pregunta: "¿Cuánto dura un partido de baloncesto de la NBA?",
        opciones: ["40 minutos", "48 minutos", "90 minutos", "60 minutos"],
        correcta: "48 minutos",
        img: "https://www.stadior.com/blog/wp-content/uploads/2017/04/balon-baloncesto-oficial.jpg"
      },
      {
        pregunta: "¿Qué país organiza los Juegos Olímpicos 2024?",
        opciones: ["Estados Unidos", "Francia", "Japón", "China"],
        correcta: "Francia",
        img: "https://www.elpais.com.co/resizer/v2/FZPJRDNTNVGHXIVXDIKZOQNI34.jpg?auth=3d68e5ac4f32f2127eef8f22bf41022bfb10c6fce1c8b37447dc02518c401cbd&smart=true&quality=75&width=1280"
      },
      {
        pregunta: "¿Qué jugador de fútbol es conocido como 'La Pulga'?",
        opciones: ["Cristiano Ronaldo", "Messi", "Neymar", "Mbappé"],
        correcta: "Messi",
        img: "https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000"
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
        img: "https://img.freepik.com/vector-gratis/plantilla-calendario-anual-colorido-2025-diseno-imprimible_1017-56669.jpg?semt=ais_hybrid&w=740&q=80"
      },
      {
        pregunta: "¿Qué boxeador fue apodado 'El más grande'?",
        opciones: ["Mike Tyson", "Muhammad Ali", "Rocky Marciano", "Floyd Mayweather"],
        correcta: "Muhammad Ali",
        img: "https://pymstatic.com/9222/conversions/muhammad-ali-wide.jpg"
      },
      {
        pregunta: "¿Qué selección ha ganado más Copas del Mundo?",
        opciones: ["Italia", "Alemania", "Brasil", "Argentina"],
        correcta: "Brasil",
        img: "https://www.democraticac.de/wp-content/uploads/2014/05/%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%B2%D9%8A%D9%84.jpg"
      },
      {
        pregunta: "¿En qué deporte se utiliza el término 'birdie'?",
        opciones: ["Golf", "Béisbol", "Tenis", "Rugby"],
        correcta: "Golf",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Golf_ball.jpg"
      },
      {
        pregunta: "¿Cuántos rounds tiene un combate profesional de boxeo?",
        opciones: ["10", "12", "15", "8"],
        correcta: "12",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Boxing_ring.jpg"
      },
      {
        pregunta: "¿Qué país ganó el Mundial de fútbol de 2006?",
        opciones: ["Brasil", "Italia", "Alemania", "Francia"],
        correcta: "Italia",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Italia_2006_Celebration.jpg"
      },
      {
        pregunta: "¿En qué país nació Usain Bolt?",
        opciones: ["Jamaica", "EEUU", "Canadá", "Sudáfrica"],
        correcta: "Jamaica",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/96/Usain_Bolt_16082009_Berlin_2009_100m_final2.jpg"
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
        img: "https://cdn.pixabay.com/photo/2016/11/29/03/42/pyramids-1863026_960_720.jpg"
      },
      {
        pregunta: "¿Qué idioma se habla principalmente en Brasil?",
        opciones: ["Español", "Portugués", "Inglés", "Francés"],
        correcta: "Portugués",
        img: "https://cdn.pixabay.com/photo/2016/11/21/16/50/brazil-1842209_960_720.jpg"
      },
      {
        pregunta: "¿Cuál es la capital de España?",
        opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correcta: "Madrid",
        img: "https://cdn.pixabay.com/photo/2017/02/12/17/32/madrid-2064406_960_720.jpg"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Miguel Ángel"],
        correcta: "Da Vinci",
        img: "https://cdn.pixabay.com/photo/2016/11/23/14/45/mona-lisa-1853728_960_720.jpg"
      },
      {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        opciones: ["Inglés", "Chino mandarín", "Español", "Árabe"],
        correcta: "Chino mandarín",
        img: "https://cdn.pixabay.com/photo/2015/03/03/08/55/world-657078_960_720.jpg"
      },
      {
        pregunta: "¿Qué ciudad es conocida como la ciudad eterna?",
        opciones: ["Atenas", "Roma", "París", "Estambul"],
        correcta: "Roma",
        img: "https://cdn.pixabay.com/photo/2016/11/29/13/12/rome-1867382_960_720.jpg"
      },
      {
        pregunta: "¿Cuál es el país con más habitantes del mundo?",
        opciones: ["India", "China", "EE.UU.", "Rusia"],
        correcta: "China",
        img: "https://cdn.pixabay.com/photo/2015/03/03/08/55/world-657078_960_720.jpg"
      },
      {
        pregunta: "¿Qué moneda se usa en Japón?",
        opciones: ["Yen", "Won", "Peso", "Dólar"],
        correcta: "Yen",
        img: "https://cdn.pixabay.com/photo/2017/07/25/22/13/japanese-yen-2535236_960_720.jpg"
      }
    ],
    dificil: [
      {
        pregunta: "¿Qué civilización construyó Machu Picchu?",
        opciones: ["Azteca", "Inca", "Maya", "Olmeca"],
        correcta: "Inca",
        img: "https://cdn.pixabay.com/photo/2015/10/16/14/28/machu-picchu-991715_960_720.jpg"
      },
      {
        pregunta: "¿Qué país inventó la pólvora?",
        opciones: ["China", "Japón", "India", "Corea"],
        correcta: "China",
        img: "https://cdn.pixabay.com/photo/2015/11/07/11/37/fireworks-1031169_960_720.jpg"
      },
      {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        opciones: ["K2", "Everest", "Makalu", "Annapurna"],
        correcta: "Everest",
        img: "https://cdn.pixabay.com/photo/2015/03/26/09/41/mount-everest-690886_960_720.jpg"
      },
      {
        pregunta: "¿En qué país nació Aristóteles?",
        opciones: ["Grecia", "Italia", "Egipto", "Turquía"],
        correcta: "Grecia",
        img: "https://cdn.pixabay.com/photo/2017/05/13/22/54/greek-2312999_960_720.jpg"
      },
      {
        pregunta: "¿Qué país es conocido como la tierra del sol naciente?",
        opciones: ["Japón", "China", "Corea", "Filipinas"],
        correcta: "Japón",
        img: "https://cdn.pixabay.com/photo/2016/11/23/14/42/mount-fuji-1853406_960_720.jpg"
      },
      {
        pregunta: "¿Qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1941", "1945", "1936"],
        correcta: "1939",
        img: "https://cdn.pixabay.com/photo/2015/09/18/11/36/war-944074_960_720.jpg"
      },
      {
        pregunta: "¿Qué país tiene forma de bota?",
        opciones: ["Italia", "Grecia", "España", "Francia"],
        correcta: "Italia",
        img: "https://cdn.pixabay.com/photo/2015/09/18/11/36/italy-944074_960_720.jpg"
      }
    ]
  },
  arte: {
    facil: [
      {
        pregunta: "¿Quién pintó La noche estrellada?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correcta: "Van Gogh",
        img: "https://cdn.pixabay.com/photo/2018/08/02/13/24/starry-night-3588187_960_720.jpg"
      },
      {
        pregunta: "¿Cuál es el instrumento principal en una orquesta?",
        opciones: ["Violín", "Piano", "Guitarra", "Trompeta"],
        correcta: "Violín",
        img: "https://cdn.pixabay.com/photo/2017/01/10/22/19/orchestra-1964746_960_720.jpg"
      },
      {
        pregunta: "¿Qué arte usa arcilla como material?",
        opciones: ["Escultura", "Pintura", "Música", "Danza"],
        correcta: "Escultura",
        img: "https://cdn.pixabay.com/photo/2017/09/29/12/15/pottery-2796012_960_720.jpg"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Qué artista pintó 'El Guernica'?",
        opciones: ["Dalí", "Picasso", "Velázquez", "Monet"],
        correcta: "Picasso",
        img: "https://cdn.pixabay.com/photo/2019/08/23/22/49/guernica-4426098_960_720.jpg"
      },
      {
        pregunta: "¿Qué corriente artística representa sueños y el subconsciente?",
        opciones: ["Cubismo", "Surrealismo", "Realismo", "Impresionismo"],
        correcta: "Surrealismo",
        img: "https://cdn.pixabay.com/photo/2015/02/11/14/24/painting-633252_960_720.jpg"
      },
      {
        pregunta: "¿Qué famoso escultor hizo 'El Pensador'?",
        opciones: ["Rodin", "Miguel Ángel", "Donatello", "Bernini"],
        correcta: "Rodin",
        img: "https://cdn.pixabay.com/photo/2016/12/15/20/21/the-thinker-1910733_960_720.jpg"
      },
      {
        pregunta: "¿En qué país nació Pablo Picasso?",
        opciones: ["España", "Francia", "Italia", "Portugal"],
        correcta: "España",
        img: "https://cdn.pixabay.com/photo/2019/08/23/22/49/guernica-4426098_960_720.jpg"
      },
      {
        pregunta: "¿Qué material usa un pintor al óleo?",
        opciones: ["Tinta", "Pigmento y aceite", "Acrílico", "Grafito"],
        correcta: "Pigmento y aceite",
        img: "https://cdn.pixabay.com/photo/2016/11/29/06/18/paint-1869566_960_720.jpg"
      }
    ],
    dificil: [
      {
        pregunta: "¿Quién pintó la Capilla Sixtina?",
        opciones: ["Miguel Ángel", "Da Vinci", "Rafael", "Caravaggio"],
        correcta: "Miguel Ángel",
        img: "https://cdn.pixabay.com/photo/2015/03/30/12/35/vatican-701592_960_720.jpg"
      },
      {
        pregunta: "¿Qué pintor es famoso por cortar parte de su oreja?",
        opciones: ["Van Gogh", "Rembrandt", "Monet", "Cézanne"],
        correcta: "Van Gogh",
        img: "https://cdn.pixabay.com/photo/2017/08/29/13/27/vincent-2691989_960_720.jpg"
      },
      {
        pregunta: "¿Qué movimiento artístico lideró Claude Monet?",
        opciones: ["Impresionismo", "Cubismo", "Surrealismo", "Futurismo"],
        correcta: "Impresionismo",
        img: "https://cdn.pixabay.com/photo/2019/07/19/12/00/monet-4349677_960_720.jpg"
      },
      {
        pregunta: "¿Quién pintó 'La última cena'?",
        opciones: ["Da Vinci", "Rafael", "Caravaggio", "Botticelli"],
        correcta: "Da Vinci",
        img: "https://cdn.pixabay.com/photo/2017/02/27/15/07/the-last-supper-2102249_960_720.jpg"
      },
      {
        pregunta: "¿Qué famoso pintor español tenía el nombre completo Pablo Ruiz Picasso?",
        opciones: ["Picasso", "Goya", "Dalí", "Miró"],
        correcta: "Picasso",
        img: "https://cdn.pixabay.com/photo/2019/08/23/22/49/guernica-4426098_960_720.jpg"
      },
      {
        pregunta: "¿Qué pintura muestra a una mujer con una sonrisa misteriosa?",
        opciones: ["Mona Lisa", "La Gioconda", "Ambas son correctas", "Ninguna"],
        correcta: "Ambas son correctas",
        img: "https://cdn.pixabay.com/photo/2016/11/23/14/45/mona-lisa-1853728_960_720.jpg"
      },
      {
        pregunta: "¿Qué escultor realizó 'David'?",
        opciones: ["Miguel Ángel", "Bernini", "Donatello", "Rafael"],
        correcta: "Miguel Ángel",
        img: "https://cdn.pixabay.com/photo/2014/04/03/00/41/david-309248_960_720.jpg"
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
  } else {
    btn.classList.add("incorrect");
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
const incorrectas = questions.length - score;
resultText.textContent = `Respondiste correctamente ${score} de ${questions.length} preguntas. Incorrectas: ${incorrectas}.`;

}

document.getElementById("finishBtn").addEventListener("click", () => {
  resultScreen.style.display = "none";
  mainMenu.style.display = "block";

  document.querySelectorAll("button.selected").forEach(b => b.classList.remove("selected"));
  selectedLevel = null;
  selectedArea = null;
});

