/*declarando variables locales*/
var canvas;
var ctx;
var FPS=40;
//Dimensiones
var PantallaAlto=800;
var PantallaAncho=1000;



function empiezaJuego() {
  canvas=document.getElementByID('pantallaJuego')
  canvas.width=PantallaAncho
  canvas.heigh=PantallaAlto

 }
