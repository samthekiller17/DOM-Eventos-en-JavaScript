const latarjeta = document.getElementById("tarjeta")
const elcolor = document.getElementById("color")

elcolor.addEventListener("change", function(){

    latarjeta.style.backgroundColor = elcolor.value;

    // Pensaba que se hacia asi (como esta abajo), funciona SI, pero investigando encontre una manera mas practica y sencilla para hacerlo

    
    /*const cambiarcolor = elcolor.value;

    if(cambiarcolor === "azul"){

        latarjeta.style.backgroundColor= "blue";
    }
    if(cambiarcolor === "verde"){

        latarjeta.style.backgroundColor= "green";
    }
    if(cambiarcolor === "amarillo"){

        latarjeta.style.backgroundColor= "yellow";
    }
    if(cambiarcolor === "rosa"){

        latarjeta.style.backgroundColor= "pink";
    }*/
})  