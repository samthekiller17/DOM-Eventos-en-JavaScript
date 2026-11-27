const elcontador = document.getElementById("contador");
const sumatoriaclick = document.getElementById("sumarclick")
const reinicio = document.getElementById("reiniciar")
let suma = 0;

sumatoriaclick.addEventListener("click", function () {
    suma++;
    elcontador.textContent = suma;
    if (suma >= 10) {
        elcontador.style.color = "green";
    }
});

reinicio.addEventListener("click", function () {
    suma = 0;
    elcontador.textContent = suma;
    if (suma === 0){
        elcontador.style.color = "black";
    }
})
