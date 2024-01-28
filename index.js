// BARCFLIX - CLON DE NETFLIX
//INICIAR SESIÓN

let iniciarSesion = prompt("¿Iniciaste sesión? Respondé si o no.")

if (iniciarSesion === "no") {
    console.log("Iniciá sesión")
}
else {
    console.log("Te damos la bienvenida a Barflix")
}
;


let nombreDeUsuario = prompt("Ingresa tu usuario");
let contraseñaDeUsuario = prompt("Ingresá tu contraseña");

if (nombreDeUsuario === "Bárbara" && (contraseñaDeUsuario === "12345")) {
    console.log("BIENVENIDA");
}
else {

    console.log("¿Todavía no tenés usuario? creá uno!")
};

// FUNCIÓN 2

function saludarUsuario(nombre) {
    console.log("hola " + nombre + " ¿qué pelicula querés ver hoy?")
}

saludarUsuario("Bárbara");

// CREAR USUARIO

let crearUsuario = prompt ("¿Tenés usuario? Respondé si o no")
let edad = prompt("¿Qué edad tenés?");
let tarjetaDeCredito = prompt("¿Tenés tarjeta de crédito? respondé si o no");

if ( (crearUsuario === "no")&& (edad >= "18") && (tarjetaDeCredito === "si")) {
    console.log("Podés unirte a la comunidad BARCFLIX")
}
else {
    console.log("Lamentamos decirte que para ser parte de nustra comunidad tenés que ser mayor de edad y tener tarjeta de crédito.")
};

// LISTA DE PELICUALAS

function listaDePeliculas() {
    let ingresoDePelicula = prompt("¿Qué peli queres ver?");
    console.log("La pelicuala que estás buscando es" + ingresoDePelicula)
};


//ELECCIÓN DE PELICULA

let nombreDePelicula = prompt("Ingrese pelicula");

const peliculaEncontrada = "Volver al futuro"
if (nombreDePelicula === peliculaEncontrada) {
    console.log("Mirar película")
}
else {
    console.log("Pelicula no encontrada")
}

// CICLOS DE PELICULAS
for (let i = 1; i <= 10; i++) {
    console.log("pelicula número:", i)
};


//FUNCIONES 1
function peliculasTerror() {
    console.log("La espera")
    console.log("Hablame")
    console.log("Llaman a la puerta")
    console.log("Posesión infernal")

}
peliculasTerror();



