
// declaracion de variables
var operandoa;
var operandob;
var operacion;
var resultado = document.getElementById('display')
var teclaon = document.getElementById('on');
var teclasign = document.getElementById('sign');
var teclaraiz = document.getElementById('raiz');
var tecladividido = document.getElementById('dividido');
var tecla7 = document.getElementById('7');
var tecla8 = document.getElementById('8');
var tecla9 = document.getElementById('9');
var teclapor = document.getElementById('por');
var tecla4 = document.getElementById('4');
var tecla5 = document.getElementById('5');
var tecla6 = document.getElementById('6');
var teclamenos = document.getElementById('menos');
var tecla1 = document.getElementById('1');
var tecla2 = document.getElementById('2');
var tecla3 = document.getElementById('3');
var tecla0 = document.getElementById('0');
var teclapunto = document.getElementById('punto');
var teclaigual = document.getElementById('igual');
var teclamas = document.getElementById('mas');

// Eventos
// tecla On
function cambiarTeclaOn(){
  teclaon.style.width="21%";
  teclaon.style.height="60px";
};
function volverTeclaOn(){
  teclaon.style.width="22%";
  teclaon.style.height="62.91px";
};
teclaon.onmousedown = cambiarTeclaOn;
teclaon.onmouseup = volverTeclaOn;
teclaon.onclick = function(e){
  resetear();
}

// tecla Sign
function cambiarTeclaSign(){
  teclasign.style.width="21%";
  teclasign.style.height="60px";
};
function volverTeclaSign(){
  teclasign.style.width="22%";
  teclasign.style.height="62.91px";
};
teclasign.onmousedown=cambiarTeclaSign;
teclasign.onmouseup=volverTeclaSign;

// tecla raiz
function cambiarTeclaraiz(){
  teclaraiz.style.width="21%";
  teclaraiz.style.height="60px";
};
function volverTeclaraiz(){
  teclaraiz.style.width="22%";
  teclaraiz.style.height="62.91px";
};
teclaraiz.onmousedown=cambiarTeclaraiz;
teclaraiz.onmouseup=volverTeclaraiz;

// tecla dividido
function cambiarTecladividido(){
  tecladividido.style.width="21%";
  tecladividido.style.height="60px";
};
function volverTecladividido(){
  tecladividido.style.width="22%";
  tecladividido.style.height="62.91px";
};
tecladividido.onmousedown=cambiarTecladividido;
tecladividido.onmouseup=volverTecladividido;
tecladividido.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}

// tecla 7
function cambiarTecla7(){
  tecla7.style.width="21%";
  tecla7.style.height="60px";
};
function volverTecla7(){
  tecla7.style.width="22%";
  tecla7.style.height="62.91px";
};
tecla7.onmousedown=cambiarTecla7;
tecla7.onmouseup=volverTecla7;
tecla7.onclick = function(e){
  resultado.textContent = resultado.textContent + "7";
}

// tecla 8
function cambiarTecla8(){
  tecla8.style.width="21%";
  tecla8.style.height="60px";
};
function volverTecla8(){
  tecla8.style.width="22%";
  tecla8.style.height="62.91px";
};
tecla8.onmousedown=cambiarTecla8;
tecla8.onmouseup=volverTecla8;
tecla8.onclick=function(e){
  resultado.textContent = resultado.textContent + 8;
}

// tecla 9
function cambiarTecla9(){
  tecla9.style.width="21%";
  tecla9.style.height="60px";
};
function volverTecla9(){
  tecla9.style.width="22%";
  tecla9.style.height="62.91px";
};
tecla9.onmousedown=cambiarTecla9;
tecla9.onmouseup=volverTecla9;
tecla9.onclick = function(e){
  resultado.textContent = resultado.textContent + 9;
}

// tecla por
function cambiarTeclapor(){
  teclapor.style.width="21%";
  teclapor.style.height="60px";
};
function volverTeclapor(){
  teclapor.style.width="22%";
  teclapor.style.height="62.91px";
};
teclapor.onmousedown=cambiarTeclapor;
teclapor.onmouseup=volverTeclapor;
teclapor.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
}

// tecla 4
function cambiarTecla4(){
  tecla4.style.width="21%";
  tecla4.style.height="60px";
};
function volverTecla4(){
  tecla4.style.width="22%";
  tecla4.style.height="62.91px";
};
tecla4.onmousedown=cambiarTecla4;
tecla4.onmouseup=volverTecla4;
tecla4.onclick = function(e){
  resultado.textContent = resultado.textContent + "4";
}

// tecla 5
function cambiarTecla5(){
  tecla5.style.width="21%";
  tecla5.style.height="60px";
};
function volverTecla5(){
  tecla5.style.width="22%";
  tecla5.style.height="62.91px";
};
tecla5.onmousedown=cambiarTecla5;
tecla5.onmouseup=volverTecla5;
tecla5.onclick = function(e){
  resultado.textContent = resultado.textContent + "5";
}

// tecla 6
function cambiarTecla6(){
  tecla6.style.width="21%";
  tecla6.style.height="60px";
};
function volverTecla6(){
  tecla6.style.width="22%";
  tecla6.style.height="62.91px";
};
tecla6.onmousedown=cambiarTecla6;
tecla6.onmouseup=volverTecla6;
tecla6.onclick = function(e){
  resultado.textContent = resultado.textContent + "6";
}

// tecla menos
function cambiarTeclamenos(){
  teclamenos.style.width="21%";
  teclamenos.style.height="60px";
};
function volverTeclamenos(){
  teclamenos.style.width="22%";
  teclamenos.style.height="62.91px";
};
teclamenos.onmousedown=cambiarTeclamenos;
teclamenos.onmouseup=volverTeclamenos;
teclamenos.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}

// tecla 1
function cambiarTecla1(){
  tecla1.style.width="28%";
  tecla1.style.height="60px";
};
function volverTecla1(){
  tecla1.style.width="29%";
  tecla1.style.height="62.91px";
};
tecla1.onmousedown=cambiarTecla1;
tecla1.onmouseup=volverTecla1;
tecla1.onclick = function(e){
  resultado.textContent = resultado.textContent + "1";
}

// tecla 2
function cambiarTecla2(){
  tecla2.style.width="28%";
  tecla2.style.height="60px";
};
function volverTecla2(){
  tecla2.style.width="29%";
  tecla2.style.height="62.91px";
};
tecla2.onmousedown=cambiarTecla2;
tecla2.onmouseup=volverTecla2;
tecla2.onclick = function(e){
  resultado.textContent = resultado.textContent + "2";
}

// tecla 3
function cambiarTecla3(){
  tecla3.style.width="28%";
  tecla3.style.height="60px";
};
function volverTecla3(){
  tecla3.style.width="29%";
  tecla3.style.height="62.91px";
};
tecla3.onmousedown=cambiarTecla3;
tecla3.onmouseup=volverTecla3;
tecla3.onclick = function(e){
  resultado.textContent = resultado.textContent + "3";
}

// tecla 0
function cambiarTecla0(){
  tecla0.style.width="28%";
  tecla0.style.height="60px";
};
function volverTecla0(){
  tecla0.style.width="29%";
  tecla0.style.height="62.91px";
};
tecla0.onmousedown=cambiarTecla0;
tecla0.onmouseup=volverTecla0;
tecla0.onclick = function(e){
  resultado.textContent = resultado.textContent + "0"
}

// tecla punto
function cambiarTeclapunto(){
  teclapunto.style.width="28%";
  teclapunto.style.height="60px";
};
function volverTeclapunto(){
  teclapunto.style.width="29%";
  teclapunto.style.height="62.91px";
};
teclapunto.onmousedown=cambiarTeclapunto;
teclapunto.onmouseup=volverTeclapunto;
teclapunto.onclick = function(e){
  resultado.textContent = resultado.textContent +".";
}

// tecla igual
function cambiarTeclaigual(){
  teclaigual.style.width="28%";
  teclaigual.style.height="60px";
};
function volverTeclaigual(){
  teclaigual.style.width="29%";
  teclaigual.style.height="62.91px";
};
teclaigual.onmousedown=cambiarTeclaigual;
teclaigual.onmouseup=volverTeclaigual;
teclaigual.onclick = function(e){
  operandob = resultado.textContent;
  resolver();
}

// tecla mas
function cambiarTeclamas(){
  teclamas.style.width="99%";
  teclamas.style.height="99%";
};
function volverTeclamas(){
  teclamas.style.width="100%";
  teclamas.style.height="100%";
};
teclamas.onmousedown=cambiarTeclamas;
teclamas.onmouseup=volverTeclamas;
teclamas.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
function limpiar(){
  resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch (operacion) {
    case "+":
      res = operandoa + operandob;
      break;
    case "-":
      res = operandoa - operandob;
      break;
    case "*":
      res = operandoa * operandob;
      break;
    case "/":
      res = operandoa / operandob;
      break;
  }
  resetear();
  resultado.textContent = res;
}
