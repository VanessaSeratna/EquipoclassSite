document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
 if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
      alert("Prontinho! Você receberá as novidades por email.")
    }else{
      alert("Por favor,  preencha os campos nome e email!")
 }
} 
const myCarouselElement = document.querySelector('#myCarousel') 

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})