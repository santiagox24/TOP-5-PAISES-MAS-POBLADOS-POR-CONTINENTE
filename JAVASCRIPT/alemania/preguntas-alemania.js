let preguntas = [
    {
      enunciado_pregunta: "¿Cuál es la capital de Alemania?",
      opciones: [
        { textoOpcion: "Múnich", respuestaCorrecta: false },
        { textoOpcion: "Fráncfort", respuestaCorrecta: false },
        { textoOpcion: "Berlín", respuestaCorrecta: true },
        { textoOpcion: "Hamburgo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la bebida más famosa de Alemania?",
      opciones: [
        { textoOpcion: "Vino", respuestaCorrecta: false },
        { textoOpcion: "Cerveza", respuestaCorrecta: true },
        { textoOpcion: "Vodka", respuestaCorrecta: false },
        { textoOpcion: "Whisky", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Qué famoso festival se celebra en Múnich cada año?",
      opciones: [
        { textoOpcion: "Carnaval", respuestaCorrecta: false },
        { textoOpcion: "Oktoberfest", respuestaCorrecta: true },
        { textoOpcion: "Navidad", respuestaCorrecta: false },
        { textoOpcion: "Pascua", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad alemana es conocida por su puerto y el Miniatur Wunderland?",
      opciones: [
        { textoOpcion: "Berlín", respuestaCorrecta: false },
        { textoOpcion: "Colonia", respuestaCorrecta: false },
        { textoOpcion: "Hamburgo", respuestaCorrecta: true },
        { textoOpcion: "Düsseldorf", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el idioma oficial de Alemania?",
      opciones: [
        { textoOpcion: "Inglés", respuestaCorrecta: false },
        { textoOpcion: "Francés", respuestaCorrecta: false },
        { textoOpcion: "Alemán", respuestaCorrecta: true },
        { textoOpcion: "Italiano", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famosa autopista alemana no tiene límite de velocidad en algunos tramos?",
      opciones: [
        { textoOpcion: "Autobahn", respuestaCorrecta: true },
        { textoOpcion: "Autostrada", respuestaCorrecta: false },
        { textoOpcion: "Interstate", respuestaCorrecta: false },
        { textoOpcion: "Carretera Nacional", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el río más largo de Alemania?",
      opciones: [
        { textoOpcion: "Elba", respuestaCorrecta: false },
        { textoOpcion: "Rin", respuestaCorrecta: true },
        { textoOpcion: "Danubio", respuestaCorrecta: false },
        { textoOpcion: "Oder", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la ciudad más grande de Alemania?",
      opciones: [
        { textoOpcion: "Berlín", respuestaCorrecta: true },
        { textoOpcion: "Múnich", respuestaCorrecta: false },
        { textoOpcion: "Hamburgo", respuestaCorrecta: false },
        { textoOpcion: "Colonia", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿En qué año se cayó el Muro de Berlín?",
      opciones: [
        { textoOpcion: "1985", respuestaCorrecta: false },
        { textoOpcion: "1987", respuestaCorrecta: false },
        { textoOpcion: "1989", respuestaCorrecta: true },
        { textoOpcion: "1991", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es el plato típico alemán hecho de salchicha y col fermentada?",
      opciones: [
        { textoOpcion: "Bratwurst y Sauerkraut", respuestaCorrecta: true },
        { textoOpcion: "Wiener Schnitzel", respuestaCorrecta: false },
        { textoOpcion: "Goulash", respuestaCorrecta: false },
        { textoOpcion: "Fish and Chips", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famoso castillo inspiró el Castillo de la Bella Durmiente de Disney?",
      opciones: [
        { textoOpcion: "Castillo de Hohenzollern", respuestaCorrecta: false },
        { textoOpcion: "Castillo de Neuschwanstein", respuestaCorrecta: true },
        { textoOpcion: "Castillo de Heidelberg", respuestaCorrecta: false },
        { textoOpcion: "Castillo de Eltz", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la catedral gótica más grande de Alemania?",
      opciones: [
        { textoOpcion: "Catedral de Berlín", respuestaCorrecta: false },
        { textoOpcion: "Catedral de Múnich", respuestaCorrecta: false },
        { textoOpcion: "Catedral de Colonia", respuestaCorrecta: true },
        { textoOpcion: "Catedral de Hamburgo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es la compañía automotriz más antigua de Alemania?",
      opciones: [
        { textoOpcion: "BMW", respuestaCorrecta: false },
        { textoOpcion: "Mercedes-Benz", respuestaCorrecta: true },
        { textoOpcion: "Volkswagen", respuestaCorrecta: false },
        { textoOpcion: "Audi", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Qué ciudad alemana es famosa por su reloj de cuco?",
      opciones: [
        { textoOpcion: "Friburgo", respuestaCorrecta: false },
        { textoOpcion: "Triberg", respuestaCorrecta: true },
        { textoOpcion: "Stuttgart", respuestaCorrecta: false },
        { textoOpcion: "Heidelberg", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la región vinícola más famosa de Alemania?",
      opciones: [
        { textoOpcion: "Valle del Rin", respuestaCorrecta: true },
        { textoOpcion: "Valle del Mosela", respuestaCorrecta: false },
        { textoOpcion: "Valle del Elba", respuestaCorrecta: false },
        { textoOpcion: "Selva Negra", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Qué evento histórico tuvo lugar en Alemania en 1517?",
      opciones: [
        { textoOpcion: "La Reforma Protestante", respuestaCorrecta: true },
        { textoOpcion: "La Segunda Guerra Mundial", respuestaCorrecta: false },
        { textoOpcion: "La caída del Muro de Berlín", respuestaCorrecta: false },
        { textoOpcion: "La Unificación de Alemania", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el lago más grande de Alemania?",
      opciones: [
        { textoOpcion: "Lago Constanza", respuestaCorrecta: true },
        { textoOpcion: "Lago de Starnberg", respuestaCorrecta: false },
        { textoOpcion: "Lago Müritz", respuestaCorrecta: false },
        { textoOpcion: "Lago Ammersee", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Qué ciudad alemana es famosa por sus spas termales?",
      opciones: [
        { textoOpcion: "Dresde", respuestaCorrecta: false },
        { textoOpcion: "Baden-Baden", respuestaCorrecta: true },
        { textoOpcion: "Hannover", respuestaCorrecta: false },
        { textoOpcion: "Leipzig", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el edificio del Parlamento alemán llamado?",
      opciones: [
        { textoOpcion: "Bundesrat", respuestaCorrecta: false },
        { textoOpcion: "Reichstag", respuestaCorrecta: true },
        { textoOpcion: "Bundestag", respuestaCorrecta: false },
        { textoOpcion: "Kanzleramt", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad alemana es conocida por su famoso carnaval?",
      opciones: [
        { textoOpcion: "Düsseldorf", respuestaCorrecta: false },
        { textoOpcion: "Colonia", respuestaCorrecta: true },
        { textoOpcion: "Bonn", respuestaCorrecta: false },
        { textoOpcion: "Maguncia", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el pico más alto de Alemania?",
      opciones: [
        { textoOpcion: "Brocken", respuestaCorrecta: false },
        { textoOpcion: "Zugspitze", respuestaCorrecta: true },
        { textoOpcion: "Watzmann", respuestaCorrecta: false },
        { textoOpcion: "Feldberg", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el principal aeropuerto de Alemania?",
      opciones: [
        {
          textoOpcion: "Aeropuerto de Berlín Brandenburg",
          respuestaCorrecta: false,
        },
        { textoOpcion: "Aeropuerto de Múnich", respuestaCorrecta: false },
        { textoOpcion: "Aeropuerto de Fráncfort", respuestaCorrecta: true },
        { textoOpcion: "Aeropuerto de Düsseldorf", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famosa universidad alemana es la más antigua del país?",
      opciones: [
        { textoOpcion: "Universidad de Fráncfort", respuestaCorrecta: false },
        { textoOpcion: "Universidad de Múnich", respuestaCorrecta: false },
        { textoOpcion: "Universidad de Heidelberg", respuestaCorrecta: true },
        { textoOpcion: "Universidad de Berlín", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad alemana es conocida por su mercado navideño más antiguo?",
      opciones: [
        { textoOpcion: "Berlín", respuestaCorrecta: false },
        { textoOpcion: "Núremberg", respuestaCorrecta: true },
        { textoOpcion: "Dresde", respuestaCorrecta: false },
        { textoOpcion: "Múnich", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué filósofo alemán es conocido por su obra 'Así habló Zaratustra'?",
      opciones: [
        { textoOpcion: "Immanuel Kant", respuestaCorrecta: false },
        {
          textoOpcion: "Georg Wilhelm Friedrich Hegel",
          respuestaCorrecta: false,
        },
        { textoOpcion: "Friedrich Nietzsche", respuestaCorrecta: true },
        { textoOpcion: "Arthur Schopenhauer", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué región alemana es famosa por sus relojes de cuco y densos bosques?",
      opciones: [
        { textoOpcion: "Baviera", respuestaCorrecta: false },
        { textoOpcion: "Selva Negra", respuestaCorrecta: true },
        { textoOpcion: "Renania", respuestaCorrecta: false },
        { textoOpcion: "Sajonia", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la principal religión en Alemania?",
      opciones: [
        { textoOpcion: "Catolicismo", respuestaCorrecta: false },
        { textoOpcion: "Protestantismo", respuestaCorrecta: true },
        { textoOpcion: "Islam", respuestaCorrecta: false },
        { textoOpcion: "Judaismo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famoso científico alemán desarrolló la teoría de la relatividad?",
      opciones: [
        { textoOpcion: "Max Planck", respuestaCorrecta: false },
        { textoOpcion: "Werner Heisenberg", respuestaCorrecta: false },
        { textoOpcion: "Albert Einstein", respuestaCorrecta: true },
        { textoOpcion: "Johannes Kepler", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el deporte más popular en Alemania?",
      opciones: [
        { textoOpcion: "Baloncesto", respuestaCorrecta: false },
        { textoOpcion: "Fútbol", respuestaCorrecta: true },
        { textoOpcion: "Tenis", respuestaCorrecta: false },
        { textoOpcion: "Atletismo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famosa región alemana es conocida por su producción de vino Riesling?",
      opciones: [
        { textoOpcion: "Selva Negra", respuestaCorrecta: false },
        { textoOpcion: "Renania-Palatinado", respuestaCorrecta: true },
        { textoOpcion: "Baviera", respuestaCorrecta: false },
        { textoOpcion: "Sajonia", respuestaCorrecta: false },
      ],
    },
  ];
  
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Redondea hacia arriba para asegurarse de que se incluya el mínimo
    max = Math.floor(max); // Redondea hacia abajo para asegurarse de que se incluya el máximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function seleccionarPreguntasAleatorias() {
    let preguntaSeleccionadas = [];
    let selecciones = [];
  
    for (let i = 0; i < 5; i++) {
      let indice = getRandomInt(0, preguntas.length - 1);
      console.log(indice);
  
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
  
  export { seleccionarPreguntasAleatorias };