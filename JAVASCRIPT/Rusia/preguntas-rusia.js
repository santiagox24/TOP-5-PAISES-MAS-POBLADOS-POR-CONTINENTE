let preguntas = [
    {
      enunciado_pregunta: "¿Cuál es la capital de Rusia?",
      opciones: [
        { textoOpcion: "San Petersburgo", respuestaCorrecta: false },
        { textoOpcion: "Moscú", respuestaCorrecta: true },
        { textoOpcion: "Kazán", respuestaCorrecta: false },
        { textoOpcion: "Sochi", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿En qué continente se encuentra Rusia?",
      opciones: [
        { textoOpcion: "América", respuestaCorrecta: false },
        { textoOpcion: "Asia", respuestaCorrecta: false },
        { textoOpcion: "Europa", respuestaCorrecta: false },
        { textoOpcion: "Europa y Asia", respuestaCorrecta: true },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el río más largo de Rusia?",
      opciones: [
        { textoOpcion: "Río Volga", respuestaCorrecta: true },
        { textoOpcion: "Río Don", respuestaCorrecta: false },
        { textoOpcion: "Río Yeniséi", respuestaCorrecta: false },
        { textoOpcion: "Río Lena", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es el lago más profundo del mundo, ubicado en Rusia?",
      opciones: [
        { textoOpcion: "Lago Ladoga", respuestaCorrecta: false },
        { textoOpcion: "Lago Baikal", respuestaCorrecta: true },
        { textoOpcion: "Lago Onega", respuestaCorrecta: false },
        { textoOpcion: "Lago Peipus", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es conocida como 'La Venecia del Norte'?",
      opciones: [
        { textoOpcion: "Moscú", respuestaCorrecta: false },
        { textoOpcion: "Kazán", respuestaCorrecta: false },
        { textoOpcion: "Sochi", respuestaCorrecta: false },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: true },
      ],
    },
    {
      enunciado_pregunta: "¿Qué montaña es el pico más alto de Rusia?",
      opciones: [
        { textoOpcion: "Monte Elbrús", respuestaCorrecta: true },
        { textoOpcion: "Monte Kazbek", respuestaCorrecta: false },
        { textoOpcion: "Monte Belukha", respuestaCorrecta: false },
        { textoOpcion: "Monte Klyuchevskaya", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué evento deportivo internacional se celebró en Sochi en 2014?",
      opciones: [
        { textoOpcion: "Copa Mundial de la FIFA", respuestaCorrecta: false },
        { textoOpcion: "Juegos Olímpicos de Invierno", respuestaCorrecta: true },
        {
          textoOpcion: "Campeonato Mundial de Atletismo",
          respuestaCorrecta: false,
        },
        { textoOpcion: "Juegos Olímpicos de Verano", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famoso museo de arte se encuentra en San Petersburgo?",
      opciones: [
        { textoOpcion: "El Louvre", respuestaCorrecta: false },
        { textoOpcion: "El Prado", respuestaCorrecta: false },
        { textoOpcion: "El Hermitage", respuestaCorrecta: true },
        { textoOpcion: "La Galería Nacional", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es el nombre del ferrocarril más largo del mundo que atraviesa Rusia?",
      opciones: [
        { textoOpcion: "El Transiberiano", respuestaCorrecta: true },
        { textoOpcion: "El Orient Express", respuestaCorrecta: false },
        {
          textoOpcion: "El Tren de Alta Velocidad de Rusia",
          respuestaCorrecta: false,
        },
        { textoOpcion: "El Transmongoliano", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la religión más practicada en Rusia?",
      opciones: [
        { textoOpcion: "Islam", respuestaCorrecta: false },
        { textoOpcion: "Budismo", respuestaCorrecta: false },
        { textoOpcion: "Cristianismo Ortodoxo", respuestaCorrecta: true },
        { textoOpcion: "Catolicismo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es conocida por su arquitectura de madera y su festival de música étnica?",
      opciones: [
        { textoOpcion: "Suzdal", respuestaCorrecta: false },
        { textoOpcion: "Vladivostok", respuestaCorrecta: false },
        { textoOpcion: "Irkutsk", respuestaCorrecta: true },
        { textoOpcion: "Nizhni Nóvgorod", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿En qué ciudad se encuentra la Plaza Roja?",
      opciones: [
        { textoOpcion: "Moscú", respuestaCorrecta: true },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: false },
        { textoOpcion: "Novosibirsk", respuestaCorrecta: false },
        { textoOpcion: "Ekaterimburgo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué estructura arquitectónica famosa en Moscú tiene cúpulas en forma de cebolla?",
      opciones: [
        { textoOpcion: "Catedral de Cristo Salvador", respuestaCorrecta: false },
        { textoOpcion: "Catedral de San Basilio", respuestaCorrecta: true },
        { textoOpcion: "El Kremlin", respuestaCorrecta: false },
        { textoOpcion: "Catedral de Kazán", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es la moneda oficial de Rusia?",
      opciones: [
        { textoOpcion: "Euro", respuestaCorrecta: false },
        { textoOpcion: "Rublo", respuestaCorrecta: true },
        { textoOpcion: "Dólar", respuestaCorrecta: false },
        { textoOpcion: "Yen", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es el principal aeropuerto internacional de Moscú?",
      opciones: [
        { textoOpcion: "Aeropuerto de Domodédovo", respuestaCorrecta: false },
        { textoOpcion: "Aeropuerto de Sheremetyevo", respuestaCorrecta: true },
        { textoOpcion: "Aeropuerto de Vnúkovo", respuestaCorrecta: false },
        { textoOpcion: "Aeropuerto de Pulkovo", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es famosa por sus estaciones de esquí en las montañas del Cáucaso?",
      opciones: [
        { textoOpcion: "Sochi", respuestaCorrecta: true },
        { textoOpcion: "Moscú", respuestaCorrecta: false },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: false },
        { textoOpcion: "Novosibirsk", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué símbolo de Rusia se encuentra en la Plaza Roja de Moscú?",
      opciones: [
        { textoOpcion: "El Kremlin", respuestaCorrecta: true },
        { textoOpcion: "El Hermitage", respuestaCorrecta: false },
        { textoOpcion: "La Ópera de Bolshói", respuestaCorrecta: false },
        { textoOpcion: "El Parque Gorki", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Cuál es el nombre de la península volcánica situada en el extremo oriental de Rusia?",
      opciones: [
        { textoOpcion: "Península de Kola", respuestaCorrecta: false },
        { textoOpcion: "Península de Kamchatka", respuestaCorrecta: true },
        { textoOpcion: "Península de Chukotka", respuestaCorrecta: false },
        { textoOpcion: "Península de Yamal", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Cuál es el sistema de escritura utilizado en Rusia?",
      opciones: [
        { textoOpcion: "Alfabeto Latino", respuestaCorrecta: false },
        { textoOpcion: "Alfabeto Cirílico", respuestaCorrecta: true },
        { textoOpcion: "Alfabeto Griego", respuestaCorrecta: false },
        { textoOpcion: "Alfabeto Árabe", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es conocida por su festival internacional de cine?",
      opciones: [
        { textoOpcion: "Sochi", respuestaCorrecta: false },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: false },
        { textoOpcion: "Moscú", respuestaCorrecta: true },
        { textoOpcion: "Vladivostok", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué líder ruso es conocido por su papel en la Revolución de Octubre de 1917?",
      opciones: [
        { textoOpcion: "José Stalin", respuestaCorrecta: false },
        { textoOpcion: "Mijaíl Gorbachov", respuestaCorrecta: false },
        { textoOpcion: "Vladimir Lenin", respuestaCorrecta: true },
        { textoOpcion: "Nikita Jrushchov", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué famoso compositor ruso escribió 'El Cascanueces' y 'El Lago de los Cisnes'?",
      opciones: [
        { textoOpcion: "Igor Stravinsky", respuestaCorrecta: false },
        { textoOpcion: "Modest Mussorgsky", respuestaCorrecta: false },
        { textoOpcion: "Sergei Rachmaninoff", respuestaCorrecta: false },
        { textoOpcion: "Pyotr Ilyich Tchaikovsky", respuestaCorrecta: true },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad de Rusia es famosa por su arquitectura modernista y sus rascacielos?",
      opciones: [
        { textoOpcion: "Nizhni Nóvgorod", respuestaCorrecta: false },
        { textoOpcion: "Samara", respuestaCorrecta: false },
        { textoOpcion: "Ekaterimburgo", respuestaCorrecta: true },
        { textoOpcion: "Irkutsk", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad es conocida como el 'Centro de la Ciencia y la Educación' en Rusia?",
      opciones: [
        { textoOpcion: "Moscú", respuestaCorrecta: false },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: false },
        { textoOpcion: "Novosibirsk", respuestaCorrecta: true },
        { textoOpcion: "Vladivostok", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué importante recurso natural es abundante en Siberia?",
      opciones: [
        { textoOpcion: "Petróleo", respuestaCorrecta: true },
        { textoOpcion: "Oro", respuestaCorrecta: false },
        { textoOpcion: "Uranio", respuestaCorrecta: false },
        { textoOpcion: "Cobre", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es conocida por su 'Anillo de Oro', una serie de ciudades históricas?",
      opciones: [
        { textoOpcion: "Moscú", respuestaCorrecta: false },
        { textoOpcion: "Vladímir", respuestaCorrecta: true },
        { textoOpcion: "Ekaterimburgo", respuestaCorrecta: false },
        { textoOpcion: "Rostov", respuestaCorrecta: false },
      ],
    },
    {
      enunciado_pregunta: "¿Qué océano bordea el extremo oriental de Rusia?",
      opciones: [
        { textoOpcion: "Océano Atlántico", respuestaCorrecta: false },
        { textoOpcion: "Océano Índico", respuestaCorrecta: false },
        { textoOpcion: "Océano Ártico", respuestaCorrecta: false },
        { textoOpcion: "Océano Pacífico", respuestaCorrecta: true },
      ],
    },
    {
      enunciado_pregunta:
        "¿Qué ciudad rusa es famosa por sus 'Noches Blancas' durante el verano?",
      opciones: [
        { textoOpcion: "Moscú", respuestaCorrecta: false },
        { textoOpcion: "Sochi", respuestaCorrecta: false },
        { textoOpcion: "Vladivostok", respuestaCorrecta: false },
        { textoOpcion: "San Petersburgo", respuestaCorrecta: true },
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