const laentrada = document.getElementById("entrada");
const lavista = document.getElementById("vista")

laentrada.addEventListener("input", function() {
    const escrito = laentrada.value;

    lavista.textContent = escrito;
});