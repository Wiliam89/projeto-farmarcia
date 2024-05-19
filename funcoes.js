function mudaFoto (foto)
{
   document.getElementById("icone").src= foto;
}

 function ocultarMenu() {
  var ocultarItens = document.getElementById("menu");
  if(window.innerWidth <= 1000) {
    ocultarItens.style.display = "none"; 
  } else {
    ocultarItens.style.display = "block";
  }

}

function clickMenu() {
var mostrarItens = document.getElementById("menu");
 if(mostrarItens.style.display == "none"){
      mostrarItens.style.display = "block";
    } else {
      mostrarItens.style.display = "none";
 }
}

 function mudouTamanho() {
  var mostrarItens = document.getElementById("menu");
  if(window.innerWidth >= 1000) {
    mostrarItens.style.display = "block"; 
  } else {
    mostrarItens.style.display = "none";
  }

}

window.addEventListener("load", ocultarMenu);






 

