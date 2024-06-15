
let numPreguntas = 0;
let carruselContenedora = document.getElementById("carrusel-quiz");
let button = document.getElementById("button-quiz");
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let portadaQuiz = document.getElementById("quiz-portada");
let slideIndex = 1;

function activarQuiz() {
  portadaQuiz.className += " desaparecer";
  carruselContenedora.classList.remove("desaparecer");
  showSlides(slideIndex);
  button.className += " desaparecer";
}

button.addEventListener("click", activarQuiz);

Math.floor(Math.random() * 100);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function verificarSeleccion(radios) {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true
    }
  }
  return false
}

function finishQuiz() 
{
  let forms = document.getElementsByClassName("contenedor-preguntas")
  let mensajeError = ""
  let seleccionIncompleta = false

  for(let i=1;i<=forms.length;i++)
    {
      let preguntas = document.getElementsByName("pregunta_" + i)
      if(!verificarSeleccion(preguntas))
        {
          mensajeError += "Por favor, selecciona una opción en la pregunta " + i + "\n"
          seleccionIncompleta = true
        }
    }
    if(seleccionIncompleta)
      {
        alert(mensajeError)
      }else
      {

      }
}
