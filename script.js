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
        img: "https://thehardtackle.com/wp-content/uploads/2022/11/homecrowd-formation-kySHlBU5VEg3S52F26BN.png"
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
        img: "https://ecsmedia.pl/c/fototapeta-paryz-wieza-eiffla-flizelina-zmywalna-135x90-b-iext171431517.jpg"
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
        img: "https://golferhive.com/wp-content/uploads/2023/05/What-is-a-Birdie-in-Golf-1024x745.jpg"
      },
      {
        pregunta: "¿Cuántos rounds tiene un combate profesional de boxeo?",
        opciones: ["10", "12", "15", "8"],
        correcta: "12",
        img: "https://cdn.briefly.co.za/images/1120/b5573d5acc4d87ad.jpeg?v=1"
      },
      {
        pregunta: "¿Qué país ganó el Mundial de fútbol de 2006?",
        opciones: ["Brasil", "Italia", "Alemania", "Francia"],
        correcta: "Italia",
        img: "https://tse4.mm.bing.net/th/id/OIP.SVokor4lxoflJCdJ0TqsMwHaE5?cb=12&w=1080&h=715&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        pregunta: "¿En qué país nació Usain Bolt?",
        opciones: ["Jamaica", "EEUU", "Canadá", "Sudáfrica"],
        correcta: "Jamaica",
        img: "https://tse1.mm.bing.net/th/id/OIP.CIpNMzYwvrq3s6FnT2eZGgHaE7?cb=12&w=1804&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"
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
        img: "https://www.vipavi.es/wp-content/uploads/2016/02/Hamer-02-768x512.jpg"
      },
      {
        pregunta: "¿Qué idioma se habla principalmente en Brasil?",
        opciones: ["Español", "Portugués", "Inglés", "Francés"],
        correcta: "Portugués",
        img: "https://www.swr.de/kultur/sprache/1751023876594%2Csprachen-vielfalt-100~_v-16x9@2dL_-6c42aff4e68b43c7868c3240d3ebfa29867457da.jpg"
      },
      {
        pregunta: "¿Cuál es la capital de España?",
        opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correcta: "Madrid",
        img: "https://www.goatsontheroad.com/wp-content/uploads/2022/07/expat-life-in-madrid.jpg"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Miguel Ángel"],
        correcta: "Da Vinci",
        img: "https://cdn.7days.ru/upload/images/1d0/5ac6dcd1a50b4160d6859d52dbf90.jpg"
      },
      {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        opciones: ["Inglés", "Chino mandarín", "Español", "Árabe"],
        correcta: "Chino mandarín",
        img: "https://cdn.wikifarmer.com/market/en/images/detailed/59/mandarini-siciliani_65kk-8s.jpg?t=1642678621"
      },
      {
        pregunta: "¿Qué ciudad es conocida como la ciudad eterna?",
        opciones: ["Atenas", "Roma", "París", "Estambul"],
        correcta: "Roma",
        img: "https://condominiosjardins.com.br/wp-content/uploads/2022/01/roma.jpg"
      },
      {
        pregunta: "¿Cuál es el país con más habitantes del mundo?",
        opciones: ["India", "China", "EE.UU.", "Rusia"],
        correcta: "China",
        img: "https://tse3.mm.bing.net/th/id/OIP.DpDRGbE0EiE_DM5HZ6obqQHaD4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        pregunta: "¿Qué moneda se usa en Japón?",
        opciones: ["Yen", "Won", "Peso", "Dólar"],
        correcta: "Yen",
        img: "https://www.topmannews.com/uploads/posts/265/1617274136_e94c74fbbb114e456bd2df5383e254921b004f0.png"
      }
    ],
    dificil: [
      {
        pregunta: "¿Qué civilización construyó Machu Picchu?",
        opciones: ["Azteca", "Inca", "Maya", "Olmeca"],
        correcta: "Inca",
        img: "https://hablemosdeculturas.com/wp-content/uploads/2018/12/incas-del-peru-8-2-768x512.jpg"
      },
      {
        pregunta: "¿Qué país inventó la pólvora?",
        opciones: ["China", "Japón", "India", "Corea"],
        correcta: "China",
        img: "https://tse1.mm.bing.net/th/id/OIP.km5EBE5xtG0iAHWtjJJIcQHaEK?cb=12&w=626&h=352&rs=1&pid=ImgDetMain&o=7&rm=3"
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
        img: "https://tse4.mm.bing.net/th/id/OIP.mjLayWMMi3DBKpcRq4Ko9QHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        pregunta: "¿Qué país es conocido como la tierra del sol naciente?",
        opciones: ["Japón", "China", "Corea", "Filipinas"],
        correcta: "Japón",
        img: "https://cdn1.matadornetwork.com/blogs/1/2011/05/japan-1200x729.jpg"
      },
      {
        pregunta: "¿Qué año comenzó la Segunda Guerra Mundial?",
        opciones: ["1939", "1941", "1945", "1936"],
        correcta: "1939",
        img: "https://th.bing.com/th/id/R.14657a7efc26fde2206133407acbb0eb?rik=V2bdAYl%2fCwDqYw&riu=http%3a%2f%2fximenaduquevalencia.com%2fwp-content%2fuploads%2f2022%2f12%2fArticulo-como-ayudar-a-la-humanidad-diciembre-28-1200x800.jpg&ehk=U8WqK3lzRAD%2fF9m3tHoMO3lepJ0aXYvpBApyREzDxL0%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        pregunta: "¿Qué país tiene forma de bota?",
        opciones: ["Italia", "Grecia", "España", "Francia"],
        correcta: "Italia",
        img: "https://www.kebuena.com.mx/wp-content/uploads/2020/06/GettyImages-1158422275-1-1-e1593469678374.jpg"
      }
    ]
  },
  arte: {
    facil: [
      {
        pregunta: "¿Quién pintó La noche estrellada?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        correcta: "Van Gogh",
        img: "https://c8.alamy.com/comp/PN0FYY/the-starry-night-van-gogh-1889-PN0FYY.jpg"
      },
      {
        pregunta: "¿Cuál es el instrumento principal en una orquesta?",
        opciones: ["Violín", "Piano", "Guitarra", "Trompeta"],
        correcta: "Violín",
        img: "https://www.papillonsblancs-lille.org/images/AOUT22_osmf.jpg"      },
      {
        pregunta: "¿Qué arte usa arcilla como material?",
        opciones: ["Escultura", "Pintura", "Música", "Danza"],
        correcta: "Escultura",
        img: "https://www.65ymas.com/uploads/s1/39/59/59/david-4651157-1920_1_621x621.jpeg"
      }
    ],
    intermedio: [
      {
        pregunta: "¿Qué artista pintó 'El Guernica'?",
        opciones: ["Dalí", "Picasso", "Velázquez", "Monet"],
        correcta: "Picasso",
        img: "https://cdn.wallpapersafari.com/60/46/iSkuYD.jpg"
      },
      {
        pregunta: "¿Qué corriente artística representa sueños y el subconsciente?",
        opciones: ["Cubismo", "Surrealismo", "Realismo", "Impresionismo"],
        correcta: "Surrealismo",
        img: "https://1.bp.blogspot.com/-WiutbFPJSU4/WVcPreFNvVI/AAAAAAAAA2U/SO3B6BuXQ5AvyvnQz9FUzedL_fpYo6t3wCLcBGAs/s1600/p%2B8.jpg"
      },
      {
        pregunta: "¿Qué famoso escultor hizo 'El Pensador'?",
        opciones: ["Rodin", "Miguel Ángel", "Donatello", "Bernini"],
        correcta: "Rodin",
        img: "https://tse3.mm.bing.net/th/id/OIP.0GJQl7xPhQodzBekbjKpiQHaLG?w=1667&h=2500&rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        pregunta: "¿En qué país nació Pablo Picasso?",
        opciones: ["España", "Francia", "Italia", "Portugal"],
        correcta: "España",
        img: "https://hips.hearstapps.com/hmg-prod/images/pablo-picasso-in-his-mansion-la-californie-in-cannes-news-photo-1688573424.jpg?crop=1xw:0.99741xh;center"
      },
      {
        pregunta: "¿Qué material usa un pintor al óleo?",
        opciones: ["Tinta", "Pigmento y aceite", "Acrílico", "Grafito"],
        correcta: "Pigmento y aceite",
        img: "https://th.bing.com/th/id/R.71bc87bc4765efd7a7ca6a8139155f59?rik=aKJdOSN%2bvCma2A&riu=http%3a%2f%2fm1.paperblog.com%2fi%2f300%2f3007847%2fpintura-al-oleo-tecnicas-caracteristicas-L-R6b2nG.jpeg&ehk=w2Fn7PCXHLWBGL%2fwR3NV0snzj1ybG0APo3n0QBOkG%2bI%3d&risl=&pid=ImgRaw&r=0"
      }
    ],
    dificil: [
      {
        pregunta: "¿Quién pintó la Capilla Sixtina?",
        opciones: ["Miguel Ángel", "Da Vinci", "Rafael", "Caravaggio"],
        correcta: "Miguel Ángel",
        img: "https://tse3.mm.bing.net/th/id/OIP.FdJFVZfGvVAhueBkG58yZQHaD6?rs=1&pid=ImgDetMain&o=7&rm=3"
      },
      {
        pregunta: "¿Qué pintor es famoso por cortar parte de su oreja?",
        opciones: ["Van Gogh", "Rembrandt", "Monet", "Cézanne"],
        correcta: "Van Gogh",
        img: "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/600/painter.jpg"
      },
      {
        pregunta: "¿Qué movimiento artístico lideró Claude Monet?",
        opciones: ["Impresionismo", "Cubismo", "Surrealismo", "Futurismo"],
        correcta: "Impresionismo",
        img: "https://m.media-amazon.com/images/I/81Wu5RAYFiL._AC_SL1500_.jpg"
      },
      {
        pregunta: "¿Quién pintó 'La última cena'?",
        opciones: ["Da Vinci", "Rafael", "Caravaggio", "Botticelli"],
        correcta: "Da Vinci",
        img: "https://tiposdearte.com/wp-content/uploads/2014/12/leonardo-da-vinci.jpg"
      },
      {
        pregunta: "¿Quién pintó “El jardín de las delicias”?",
        opciones: ["leonardo da vinci", "pieter brueghel", "el bosco", "caravaggio"],
        correcta: "el bosco",
        img: "https://www.elindependiente.com/wp-content/uploads/2017/03/El-jard%C3%ADn-de-las-delicias-656x368.jpg"
      },
      {
        pregunta: "¿Qué pintura muestra a una mujer con una sonrisa misteriosa?",
        opciones: ["Mona Lisa", "La Gioconda", "Ambas son correctas", "Ninguna"],
        correcta: "Ambas son correctas",
        img: "https://wallpaperswide.com/download/mona_lisa_by_leonardo_da_vinci-wallpaper-1440x960.jpg"
      },
      {
        pregunta: "¿Qué escultor realizó 'David'?",
        opciones: ["Miguel Ángel", "Bernini", "Donatello", "Rafael"],
        correcta: "Miguel Ángel",
        img: "https://lacamaradelarte.com/wp-content/uploads/2021/11/1614164370_405537_1614164804_noticia_normal_recorte1-661x420.jpg"
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

