let preguntas = [
  {
    enunciado_pregunta: "¿Cuál es la capital de Estados Unidos?",
    opciones: [
      { textoOpcion: "Nueva York", respuestaCorrecta: false },
      { textoOpcion: "Los Ángeles", respuestaCorrecta: false },
      { textoOpcion: "Washington, D.C.", respuestaCorrecta: true },
      { textoOpcion: "Chicago", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
    opciones: [
      { textoOpcion: "Benjamin Franklin", respuestaCorrecta: false },
      { textoOpcion: "George Washington", respuestaCorrecta: true },
      { textoOpcion: "Donald Trump", respuestaCorrecta: false },
      { textoOpcion: "Abraham Lincoln", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿En qué año se firmó la Declaración de Independencia?",
    opciones: [
      { textoOpcion: "1776", respuestaCorrecta: true },
      { textoOpcion: "1783", respuestaCorrecta: false },
      { textoOpcion: "1801", respuestaCorrecta: false },
      { textoOpcion: "1812", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Cuál es el río más largo de Estados Unidos?",
    opciones: [
      { textoOpcion: "Río Colorado", respuestaCorrecta: false },
      { textoOpcion: "Río Misisipi", respuestaCorrecta: true },
      { textoOpcion: "Río Missouri", respuestaCorrecta: false },
      { textoOpcion: "Río Ohio", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Cuántos estados conforman Estados Unidos?",
    opciones: [
      { textoOpcion: "48", respuestaCorrecta: false },
      { textoOpcion: "49", respuestaCorrecta: false },
      { textoOpcion: "50", respuestaCorrecta: true },
      { textoOpcion: "52", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Cuál es el estado más grande en términos de superficie?",
    opciones: [
      { textoOpcion: "Texas", respuestaCorrecta: false },
      { textoOpcion: "California", respuestaCorrecta: false },
      { textoOpcion: "Alaska", respuestaCorrecta: true },
      { textoOpcion: "Montana", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué documento establece las leyes y el gobierno de Estados Unidos?",
    opciones: [
      {
        textoOpcion: "La Declaración de Independencia",
        respuestaCorrecta: false,
      },
      { textoOpcion: "La Carta Magna", respuestaCorrecta: false },
      { textoOpcion: "La Constitución", respuestaCorrecta: true },
      { textoOpcion: "El Código de Hammurabi", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Cuál es el himno nacional de Estados Unidos?",
    opciones: [
      { textoOpcion: "God Bless America", respuestaCorrecta: false },
      { textoOpcion: "America the Beautiful", respuestaCorrecta: false },
      { textoOpcion: "The Star-Spangled Banner", respuestaCorrecta: true },
      { textoOpcion: "My Country, 'Tis of Thee", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué evento marcó el inicio de la Gran Depresión en 1929?",
    opciones: [
      { textoOpcion: "La Primera Guerra Mundial", respuestaCorrecta: false },
      { textoOpcion: "El Crack de Wall Street", respuestaCorrecta: true },
      { textoOpcion: "La Segunda Guerra Mundial", respuestaCorrecta: false },
      { textoOpcion: "El New Deal", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Quién escribió la Declaración de Independencia?",
    opciones: [
      { textoOpcion: "George Washington", respuestaCorrecta: false },
      { textoOpcion: "Benjamin Franklin", respuestaCorrecta: false },
      { textoOpcion: "Thomas Jefferson", respuestaCorrecta: true },
      { textoOpcion: "John Hancock", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué movimiento luchó por los derechos civiles en la década de 1960?",
    opciones: [
      {
        textoOpcion: "Movimiento por los derechos de las mujeres",
        respuestaCorrecta: false,
      },
      { textoOpcion: "Movimiento obrero", respuestaCorrecta: false },
      {
        textoOpcion: "Movimiento por los derechos civiles",
        respuestaCorrecta: true,
      },
      { textoOpcion: "Movimiento ecologista", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Cuál es el órgano legislativo de Estados Unidos?",
    opciones: [
      { textoOpcion: "El Parlamento", respuestaCorrecta: false },
      { textoOpcion: "El Congreso", respuestaCorrecta: true },
      { textoOpcion: "La Asamblea Nacional", respuestaCorrecta: false },
      { textoOpcion: "La Dieta", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿En qué estado se encuentra el Parque Nacional Yellowstone?",
    opciones: [
      { textoOpcion: "California", respuestaCorrecta: false },
      { textoOpcion: "Colorado", respuestaCorrecta: false },
      { textoOpcion: "Wyoming", respuestaCorrecta: true },
      { textoOpcion: "Montana", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Qué océano se encuentra al este de Estados Unidos?",
    opciones: [
      { textoOpcion: "Océano Atlántico", respuestaCorrecta: true },
      { textoOpcion: "Océano Pacífico", respuestaCorrecta: false },
      { textoOpcion: "Océano Índico", respuestaCorrecta: false },
      { textoOpcion: "Océano Ártico", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Cuál es el nombre de la fiesta nacional que celebra la independencia de Estados Unidos?",
    opciones: [
      { textoOpcion: "Día de los Caídos", respuestaCorrecta: false },
      { textoOpcion: "Día del Trabajo", respuestaCorrecta: false },
      { textoOpcion: "Día de la Independencia", respuestaCorrecta: true },
      { textoOpcion: "Acción de Gracias", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Quién es conocido como el 'Padre de la Constitución'?",
    opciones: [
      { textoOpcion: "George Washington", respuestaCorrecta: false },
      { textoOpcion: "John Adams", respuestaCorrecta: false },
      { textoOpcion: "Alexander Hamilton", respuestaCorrecta: false },
      { textoOpcion: "James Madison", respuestaCorrecta: true },
    ],
  },
  {
    enunciado_pregunta:
      "¿En qué ciudad se encuentra la Estatua de la Libertad?",
    opciones: [
      { textoOpcion: "Washington, D.C.", respuestaCorrecta: false },
      { textoOpcion: "Boston", respuestaCorrecta: false },
      { textoOpcion: "Filadelfia", respuestaCorrecta: false },
      { textoOpcion: "Nueva York", respuestaCorrecta: true },
    ],
  },
  {
    enunciado_pregunta: "¿Cuál es la montaña más alta de Estados Unidos?",
    opciones: [
      { textoOpcion: "Monte Whitney", respuestaCorrecta: false },
      { textoOpcion: "Monte Elbert", respuestaCorrecta: false },
      { textoOpcion: "Denali (Monte McKinley)", respuestaCorrecta: true },
      { textoOpcion: "Monte Rainier", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué guerra se libró entre el norte y el sur de Estados Unidos?",
    opciones: [
      { textoOpcion: "La Guerra Revolucionaria", respuestaCorrecta: false },
      { textoOpcion: "La Guerra de 1812", respuestaCorrecta: false },
      { textoOpcion: "La Guerra Civil", respuestaCorrecta: true },
      { textoOpcion: "La Guerra Hispanoamericana", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Cuál es la moneda oficial de Estados Unidos?",
    opciones: [
      { textoOpcion: "Euro", respuestaCorrecta: false },
      { textoOpcion: "Peso", respuestaCorrecta: false },
      { textoOpcion: "Dólar estadounidense", respuestaCorrecta: true },
      { textoOpcion: "Libra esterlina", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Qué enmienda a la Constitución abolió la esclavitud?",
    opciones: [
      { textoOpcion: "Décima Enmienda", respuestaCorrecta: false },
      { textoOpcion: "Decimotercera Enmienda", respuestaCorrecta: true },
      { textoOpcion: "Decimocuarta Enmienda", respuestaCorrecta: false },
      { textoOpcion: "Decimoquinta Enmienda", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Quién fue el presidente durante la Gran Depresión y la Segunda Guerra Mundial?",
    opciones: [
      { textoOpcion: "Woodrow Wilson", respuestaCorrecta: false },
      { textoOpcion: "Herbert Hoover", respuestaCorrecta: false },
      { textoOpcion: "Franklin D. Roosevelt", respuestaCorrecta: true },
      { textoOpcion: "Harry S. Truman", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Qué es el 'Bill of Rights'?",
    opciones: [
      {
        textoOpcion: "Las primeras diez enmiendas a la Constitución",
        respuestaCorrecta: true,
      },
      {
        textoOpcion: "La Declaración de Independencia",
        respuestaCorrecta: false,
      },
      {
        textoOpcion: "La Carta de Derechos Humanos de la ONU",
        respuestaCorrecta: false,
      },
      {
        textoOpcion: "El preámbulo de la Constitución",
        respuestaCorrecta: false,
      },
    ],
  },
  {
    enunciado_pregunta: "¿Qué país vendió Luisiana a Estados Unidos en 1803?",
    opciones: [
      { textoOpcion: "España", respuestaCorrecta: false },
      { textoOpcion: "Francia", respuestaCorrecta: true },
      { textoOpcion: "México", respuestaCorrecta: false },
      { textoOpcion: "Gran Bretaña", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿En qué ciudad se firmó la Declaración de Independencia?",
    opciones: [
      { textoOpcion: "Nueva York", respuestaCorrecta: false },
      { textoOpcion: "Boston", respuestaCorrecta: false },
      { textoOpcion: "Filadelfia", respuestaCorrecta: true },
      { textoOpcion: "Washington, D.C.", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué presidente fue asesinado en 1963 en Dallas, Texas?",
    opciones: [
      { textoOpcion: "Abraham Lincoln", respuestaCorrecta: false },
      { textoOpcion: "John F. Kennedy", respuestaCorrecta: true },
      { textoOpcion: "James A. Garfield", respuestaCorrecta: false },
      { textoOpcion: "William McKinley", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Qué documento puso fin a la Guerra de Independencia de Estados Unidos?",
    opciones: [
      { textoOpcion: "La Constitución", respuestaCorrecta: false },
      { textoOpcion: "El Tratado de París", respuestaCorrecta: true },
      { textoOpcion: "La Declaración de Derechos", respuestaCorrecta: false },
      { textoOpcion: "El Manifiesto Comunista", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Cuál es el segundo estado más poblado de Estados Unidos?",
    opciones: [
      { textoOpcion: "Florida", respuestaCorrecta: false },
      { textoOpcion: "Nueva York", respuestaCorrecta: false },
      { textoOpcion: "Texas", respuestaCorrecta: true },
      { textoOpcion: "California", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta: "¿Quién fue el autor de 'I Have a Dream'?",
    opciones: [
      { textoOpcion: "Malcolm X", respuestaCorrecta: false },
      { textoOpcion: "Martin Luther King Jr.", respuestaCorrecta: true },
      { textoOpcion: "Rosa Parks", respuestaCorrecta: false },
      { textoOpcion: "Jesse Jackson", respuestaCorrecta: false },
    ],
  },
  {
    enunciado_pregunta:
      "¿Cuál es el parque nacional más antiguo de Estados Unidos?",
    opciones: [
      { textoOpcion: "Parque Nacional de Yosemite", respuestaCorrecta: false },
      {
        textoOpcion: "Parque Nacional de Yellowstone",
        respuestaCorrecta: true,
      },
      {
        textoOpcion: "Parque Nacional de las Grandes Montañas Humeantes",
        respuestaCorrecta: false,
      },
      {
        textoOpcion: "Parque Nacional del Gran Cañón",
        respuestaCorrecta: false,
      },
    ],
  },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seleccionarPreguntasAleatorias() {
  let preguntaSeleccionadas = [];
  let selecciones = [];


  for (let i = 0; i < 5; i++) {
    let indice = getRandomInt(0, preguntas.length - 1);
    console.log(indice)
    if (selecciones.includes(indice)) {
      while (true) {
        indice = getRandomInt(0, preguntas.length - 1);
        if (!selecciones.includes(indice)) {
          break;
        }
      }
    }
    selecciones.push(indice);
    preguntaSeleccionadas.push(preguntas[indice]);
  }

  return preguntaSeleccionadas;
}


export {seleccionarPreguntasAleatorias}