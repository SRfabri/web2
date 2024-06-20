
/*Temporizador del boton*/ 
var boton = document.getElementById("download");
var contador = 30;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 30 segundos para redirigirte a la pagina de descargas.</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para redirigirte a la pagina de descargas. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;
