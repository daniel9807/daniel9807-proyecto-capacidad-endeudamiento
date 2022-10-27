const form = document.querySelector("#form");
const inputIngresosTotales = document.querySelector("#ingresosTotales");
const inputGastosOdeudas = document.querySelector("#gastosFijos");
const btn = document.querySelector("#btnCalcular");
const textoTotal = document.querySelector("#texto");
const textoError1 = document.querySelector("#textoError1");
const textoError2 = document.querySelector("#textoError2");

inputIngresosTotales.addEventListener("keyup", validarInputIngresos);
inputGastosOdeudas.addEventListener("keyup", validarInputGastos);
btn.addEventListener("click", calcularCapacidadEndeudamiento);

function calcularCapacidadEndeudamiento(event) {
  event.preventDefault();
  const ingreso = inputIngresosTotales.value;
  const deuda = inputGastosOdeudas.value;

  const resta = parseInt(ingreso) - parseInt(deuda);
  const totalEndeudamiento = resta * 0.35;
  const puntos = new Intl.NumberFormat().format(totalEndeudamiento);

  textoTotal.innerText = "" + puntos;
}
// Validar inputs
function validarInputIngresos(event) {
  event.preventDefault();
  if (inputIngresosTotales.value.length == 0) {
    inputIngresosTotales.classList.add("invalid");
    inputIngresosTotales.classList.remove("valid");
    textoError1.innerText = "Campo vacio";
    textoError1.style.transition = "all 0.25s";
    textoError1.style.color = "#ff3838";
  } else if (inputIngresosTotales.value) {
    inputIngresosTotales.classList.add("valid");
    inputIngresosTotales.classList.remove("invalid");
    textoError1.innerText = "";
  }
  return;
}

function validarInputGastos(event) {
  event.preventDefault();
  if (inputGastosOdeudas.value.length == 0) {
    inputGastosOdeudas.classList.add("invalid");
    inputGastosOdeudas.classList.remove("valid");
    textoError2.innerText = "Campo vacio";
    textoError2.style.transition = "all 0.25s";
    textoError2.style.color = "#ff3838";
  } else {
    inputGastosOdeudas.classList.add("valid");
    inputGastosOdeudas.classList.remove("invalid");
    textoError2.innerText = "";
  }
  return;
}
