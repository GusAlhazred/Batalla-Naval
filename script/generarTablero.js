const tableroIzquierda = document.querySelector(".tableroIzquierda");

const generarArrayFalse = () => {
    const ArrayFalse =[];
    for (y=0; y<=9; y++){
        const tableroRenglon = [];
        for (x=0; x<=9; x++){
            tableroRenglon.push(false);
        }
        ArrayFalse.push(tableroRenglon);
    }
    console.log(ArrayFalse)
    return ArrayFalse;
}

let barcosJugador = /* cargar del localStorage || */ generarArrayFalse();
let disparosJugador = generarArrayFalse();
let barcosIA = /* cargar del localStorage || */ generarArrayFalse();
let disparosIA = generarArrayFalse();


const cambiarCasilla = (boton) => {
    const x= boton.target.dataset.x;
    const y= boton.target.dataset.y;
    console.log(y)
    console.log(x)
    boton.target.classList.toggle("casilleroSinBarco");
    boton.target.classList.toggle("casilleroConBarco");
}

const generarTableroYBarcos = () => {
    for (y=0; y<=9; y++){
        const tableroRenglon = document.createElement("div");
        tableroRenglon.classList.add(".renglonCasillero", ".container", ".row");
        for (x=0; x<=9; x++){
            // const botonActual = document.createElement("div");
            const botonActual = document.createElement("input");
            botonActual.setAttribute("type", "button");
            botonActual.dataset.y= y;
            botonActual.dataset.x= x;
            botonActual.classList.add("casilleroTablero");
            barcosJugador[y][x] == true ? botonActual.classList.add("casilleroConBarco") :  botonActual.classList.add("casilleroSinBarco");  
            botonActual.addEventListener("click", cambiarCasilla)
            
            tableroRenglon.appendChild(botonActual);
            
            // barcosJugador[y][x]
        }
        tableroIzquierda.appendChild(tableroRenglon);
    }

}


const agregarBarcos = () => {
    const cantBarcos = [7, 3, 2, 1];
    //Estan contados en programador: 0, 1, 2...
    const adicional = 2;

    cantBarcos.forEach( (cant, index) => {
        // el tamaño del barco esta relacionado con el subindice
        // del array de la cantidad de barcos. Es el subindice +3
        for (i=0; i<= cant; i++){
            const tamaño = index +adicional;
            console.log(tamaño);
            for (partesBarcoPuestas=0; partesBarcoPuestas<=tamaño; partesBarcoPuestas++){
                
            }
        }
    }

    )

}

// 8 de 2 lugares
// 4 de 3 lugares
// 3 de 4 lugares
// 2 de 5 lugares
generarTableroYBarcos()

// ponerBarcos();
agregarBarcos();