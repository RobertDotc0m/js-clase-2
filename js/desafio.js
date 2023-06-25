//codigo comprar hasta 10 und//

let ejercicio1 = document.querySelector("#verificar");

function stiker() {
  let num1 = document.querySelector("#ropa1").value;
  let num2 = document.querySelector("#ropa2").value;
  let num3 = document.querySelector("#ropa3").value;
  let num4 = document.querySelector("#ropa4").value;
  let total = +num1 + +num2 + +num3 + +num4;

  if (total <= 10) {
    document.querySelector("#cantidad").innerHTML = "llevas" + total;
  } else {
    document.querySelector("#cantidad").innerHTML = "llevas demaciados stiker";
  }
}
ejercicio1.addEventListener("click", stiker);

//ejercicio 2

let ejercicio2 = document.querySelector("#onclick");

function pass() {
  let password = document.querySelector("#contraseña").value;

  if (password == 911) {
    document.querySelector("#mensaje").innerHTML = "password 1 correcto";
  } else if (password == 714) {
    document.querySelector("#mensaje").innerHTML = "password 2 correcto";
  } else {
    document.querySelector("#mensaje").innerHTML = "password incorrecto";
  }
}
ejercicio2.addEventListener("click", pass);

//ejercicio 3

let ejercicio3 = document.querySelector("#imgborder");

function img() {
  let border = document.querySelector("#imgborder").computedStyleMap.border;
  if (!border) {
    document.querySelector("#imgborder").style.border = "5px solid red";
    document.querySelector("#imgborder").style.borderRadios = "20px";
  } else {
    document.querySelector("#imgborder").style.border = "";
  }
}
ejercicio3.addEventListener("click", img);
