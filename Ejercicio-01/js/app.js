const nombre = document.getElementById("esnombre");
const btnsaludar = document.getElementById("btnSaludar");
const saludo = document.getElementById("saludo");

btnsaludar.addEventListener("click", function () {
  const sacarnombre = nombre.value.trim();

  if (sacarnombre === ("")) {
    saludo.textContent = "Escribe tu nombre por favor";
  }
  else {
    saludo.textContent = `¡Hola, ${sacarnombre}! Bienvenid@.`;
  }


});