let preguntas = [
    {
      enunciado_pregunta: "¿Cuál es la capital de Australia?",
      opciones: [
        { textoOpcion: "Sídney", respuestaCorrecta: false },
        { textoOpcion: "Melbourne", respuestaCorrecta: false },
        { textoOpcion: "Canberra", respuestaCorrecta: true },
        { textoOpcion: "Brisbane", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal es considerado un símbolo nacional de Australia?",
      opciones: [
        { textoOpcion: "Koala", respuestaCorrecta: false },
        { textoOpcion: "Canguro", respuestaCorrecta: true },
        { textoOpcion: "Emú", respuestaCorrecta: false },
        { textoOpcion: "Dingo", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es el desierto más grande de Australia?",
      opciones: [
        { textoOpcion: "Desierto de Simpson", respuestaCorrecta: false },
        { textoOpcion: "Gran Desierto de Arena", respuestaCorrecta: true },
        { textoOpcion: "Desierto de Gibson", respuestaCorrecta: false },
        { textoOpcion: "Desierto de Tanami", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es la montaña más alta de Australia?",
      opciones: [
        { textoOpcion: "Monte Kosciuszko", respuestaCorrecta: true },
        { textoOpcion: "Monte Kilimanjaro", respuestaCorrecta: false },
        { textoOpcion: "Monte Everest", respuestaCorrecta: false },
        { textoOpcion: "Monte Aconcagua", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué famoso arrecife de coral se encuentra en Australia?",
      opciones: [
        { textoOpcion: "Arrecife Mesoamericano", respuestaCorrecta: false },
        { textoOpcion: "Gran Barrera de Coral", respuestaCorrecta: true },
        { textoOpcion: "Arrecife de Belice", respuestaCorrecta: false },
        { textoOpcion: "Arrecife de Ningaloo", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es conocida por su ópera icónica?",
      opciones: [
        { textoOpcion: "Melbourne", respuestaCorrecta: false },
        { textoOpcion: "Sídney", respuestaCorrecta: true },
        { textoOpcion: "Brisbane", respuestaCorrecta: false },
        { textoOpcion: "Perth", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué famoso monolito se encuentra en el Territorio del Norte de Australia?",
      opciones: [
        { textoOpcion: "Monte Rushmore", respuestaCorrecta: false },
        { textoOpcion: "Uluru (Ayers Rock)", respuestaCorrecta: true },
        { textoOpcion: "Monte Cook", respuestaCorrecta: false },
        { textoOpcion: "Piedra del León", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es la moneda oficial de Australia?",
      opciones: [
        { textoOpcion: "Dólar neozelandés", respuestaCorrecta: false },
        { textoOpcion: "Libra esterlina", respuestaCorrecta: false },
        { textoOpcion: "Dólar australiano", respuestaCorrecta: true },
        { textoOpcion: "Euro", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué famoso explorador británico llegó a Australia en 1770?",
      opciones: [
        { textoOpcion: "Cristóbal Colón", respuestaCorrecta: false },
        { textoOpcion: "James Cook", respuestaCorrecta: true },
        { textoOpcion: "Francis Drake", respuestaCorrecta: false },
        { textoOpcion: "Walter Raleigh", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal es conocido por ser venenoso y nativo de Australia?",
      opciones: [
        { textoOpcion: "Rana dorada", respuestaCorrecta: false },
        { textoOpcion: "Serpiente marrón oriental", respuestaCorrecta: true },
        { textoOpcion: "Cobra real", respuestaCorrecta: false },
        { textoOpcion: "Mamba negra", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué es el 'Outback' en Australia?",
      opciones: [
        { textoOpcion: "Una marca de coches", respuestaCorrecta: false },
        { textoOpcion: "Una cadena de restaurantes", respuestaCorrecta: false },
        { textoOpcion: "El desierto interior del país", respuestaCorrecta: true },
        { textoOpcion: "Un tipo de música tradicional", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal marino es comúnmente avistado en la costa de Australia?",
      opciones: [
        { textoOpcion: "Ballena azul", respuestaCorrecta: false },
        { textoOpcion: "Gran tiburón blanco", respuestaCorrecta: true },
        { textoOpcion: "Delfín nariz de botella", respuestaCorrecta: false },
        { textoOpcion: "Tiburón ballena", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es famosa por sus festivales de cine y arte?",
      opciones: [
        { textoOpcion: "Adelaida", respuestaCorrecta: true },
        { textoOpcion: "Darwin", respuestaCorrecta: false },
        { textoOpcion: "Alice Springs", respuestaCorrecta: false },
        { textoOpcion: "Cairns", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es el principal deporte de invierno en Australia?",
      opciones: [
        { textoOpcion: "Esquí", respuestaCorrecta: true },
        { textoOpcion: "Snowboard", respuestaCorrecta: false },
        { textoOpcion: "Hockey sobre hielo", respuestaCorrecta: false },
        { textoOpcion: "Patinaje artístico", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué estructura natural se considera el corazón espiritual de Australia?",
      opciones: [
        { textoOpcion: "Great Ocean Road", respuestaCorrecta: false },
        { textoOpcion: "Uluru", respuestaCorrecta: true },
        { textoOpcion: "Kata Tjuta", respuestaCorrecta: false },
        { textoOpcion: "Kings Canyon", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué festividad se celebra el 26 de enero en Australia?",
      opciones: [
        { textoOpcion: "Día de la Reina", respuestaCorrecta: false },
        { textoOpcion: "Australia Day", respuestaCorrecta: true },
        { textoOpcion: "Anzac Day", respuestaCorrecta: false },
        { textoOpcion: "Día del Trabajo", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué es el 'Didgeridoo' en la cultura australiana?",
      opciones: [
        { textoOpcion: "Un instrumento musical tradicional", respuestaCorrecta: true },
        { textoOpcion: "Una danza ceremonial", respuestaCorrecta: false },
        { textoOpcion: "Un tipo de pintura aborigen", respuestaCorrecta: false },
        { textoOpcion: "Un arma de caza", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es conocida por su Jardín Botánico Real?",
      opciones: [
        { textoOpcion: "Sídney", respuestaCorrecta: false },
        { textoOpcion: "Melbourne", respuestaCorrecta: true },
        { textoOpcion: "Adelaida", respuestaCorrecta: false },
        { textoOpcion: "Perth", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué isla es conocida como el hogar del demonio de Tasmania?",
      opciones: [
        { textoOpcion: "Nueva Zelanda", respuestaCorrecta: false },
        { textoOpcion: "Tasmania", respuestaCorrecta: true },
        { textoOpcion: "Fiyi", respuestaCorrecta: false },
        { textoOpcion: "Nueva Guinea", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal es el mamífero más pequeño de Australia?",
      opciones: [
        { textoOpcion: "Ratón de casa", respuestaCorrecta: false },
        { textoOpcion: "Musaraña pigmea", respuestaCorrecta: true },
        { textoOpcion: "Wallaby", respuestaCorrecta: false },
        { textoOpcion: "Quokka", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué región australiana es famosa por sus viñedos y producción de vino?",
      opciones: [
        { textoOpcion: "Hunter Valley", respuestaCorrecta: true },
        { textoOpcion: "Outback", respuestaCorrecta: false },
        { textoOpcion: "Great Barrier Reef", respuestaCorrecta: false },
        { textoOpcion: "Kangaroo Island", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal marino venenoso se encuentra en las aguas de Australia?",
      opciones: [
        { textoOpcion: "Pez piedra", respuestaCorrecta: true },
        { textoOpcion: "Pez payaso", respuestaCorrecta: false },
        { textoOpcion: "Tiburón martillo", respuestaCorrecta: false },
        { textoOpcion: "Delfín", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué montaña es conocida como 'la montaña más alta de Australia'?",
      opciones: [
        { textoOpcion: "Monte Everest", respuestaCorrecta: false },
        { textoOpcion: "Monte Kosciuszko", respuestaCorrecta: true },
        { textoOpcion: "Monte Fuji", respuestaCorrecta: false },
        { textoOpcion: "Monte Kilimanjaro", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué evento deportivo internacional se celebra en Melbourne cada año?",
      opciones: [
        { textoOpcion: "Australian Open", respuestaCorrecta: true },
        { textoOpcion: "Copa del Mundo de Cricket", respuestaCorrecta: false },
        { textoOpcion: "Tour de Francia", respuestaCorrecta: false },
        { textoOpcion: "Copa América", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es conocida por su Festival de las Luces 'Vivid'?",
      opciones: [
        { textoOpcion: "Brisbane", respuestaCorrecta: false },
        { textoOpcion: "Melbourne", respuestaCorrecta: false },
        { textoOpcion: "Sídney", respuestaCorrecta: true },
        { textoOpcion: "Adelaida", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué animal es considerado un símbolo de la isla de Tasmania?",
      opciones: [
        { textoOpcion: "Koala", respuestaCorrecta: false },
        { textoOpcion: "Demonio de Tasmania", respuestaCorrecta: true },
        { textoOpcion: "Canguro", respuestaCorrecta: false },
        { textoOpcion: "Wombat", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es famosa por sus carnavales y eventos culturales?",
      opciones: [
        { textoOpcion: "Melbourne", respuestaCorrecta: true },
        { textoOpcion: "Darwin", respuestaCorrecta: false },
        { textoOpcion: "Alice Springs", respuestaCorrecta: false },
        { textoOpcion: "Cairns", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es el principal idioma hablado en Australia?",
      opciones: [
        { textoOpcion: "Francés", respuestaCorrecta: false },
        { textoOpcion: "Inglés", respuestaCorrecta: true },
        { textoOpcion: "Español", respuestaCorrecta: false },
        { textoOpcion: "Mandarín", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Cuál es la bebida nacional de Australia?",
      opciones: [
        { textoOpcion: "Whisky", respuestaCorrecta: false },
        { textoOpcion: "Cerveza", respuestaCorrecta: true },
        { textoOpcion: "Vodka", respuestaCorrecta: false },
        { textoOpcion: "Vino", respuestaCorrecta: false }
      ]
    },
    {
      enunciado_pregunta: "¿Qué ciudad australiana es conocida por su Festival Internacional de Cine?",
      opciones: [
        { textoOpcion: "Sídney", respuestaCorrecta: false },
        { textoOpcion: "Melbourne", respuestaCorrecta: true },
        { textoOpcion: "Perth", respuestaCorrecta: false },
        { textoOpcion: "Adelaida", respuestaCorrecta: false }
      ]
    }
  ]
  
  
  
    
    
    
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
    