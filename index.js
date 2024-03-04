//PRIMER ENTREGA






// BARCFLIX - CLON DE NETFLIX
//INICIAR SESIÓN


// let iniciarSesion = prompt("¿Iniciaste sesión? Respondé si o no.")

// if (iniciarSesion === "no") {
//     console.log("Iniciá sesión")
// }
// else {
//     console.log("Te damos la bienvenida a Barflix")
// }
// ;


// let nombreDeUsuario = prompt("Ingresa tu usuario");
// let contraseñaDeUsuario = prompt("Ingresá tu contraseña");

// if (nombreDeUsuario === "Bárbara" && (contraseñaDeUsuario === "12345")) {
//     console.log("BIENVENIDA");
// }
// else {

//     console.log("¿Todavía no tenés usuario? creá uno!")
// };

// // FUNCIÓN 2

// function saludarUsuario(nombre) {
//     console.log("hola " + nombre + " ¿qué pelicula querés ver hoy?")
// }

// saludarUsuario("Bárbara");

// // CREAR USUARIO

// let crearUsuario = prompt("¿Tenés usuario? Respondé si o no")
// let edad = prompt("¿Qué edad tenés?");
// let tarjetaDeCredito = prompt("¿Tenés tarjeta de crédito? respondé si o no");

// if ((crearUsuario === "no") && (edad >= "18") && (tarjetaDeCredito === "si")) {
//     console.log("Podés unirte a la comunidad BARCFLIX")
// }
// else {
//     console.log("Lamentamos decirte que para ser parte de nustra comunidad tenés que ser mayor de edad y tener tarjeta de crédito.")
// };

// // LISTA DE PELICUALAS

// function listaDePeliculas() {
//     let ingresoDePelicula = prompt("¿Qué peli queres ver?");
//     console.log("La pelicuala que estás buscando es" + ingresoDePelicula)
// };


// //ELECCIÓN DE PELICULA

// let nombreDePelicula = prompt("Ingrese pelicula");

// const peliculaEncontrada = "Volver al futuro"
// if (nombreDePelicula === peliculaEncontrada) {
//     console.log("Mirar película")
// }
// else {
//     console.log("Pelicula no encontrada")
// }

// // CICLOS DE PELICULAS
// for (let i = 1; i <= 10; i++) {
//     console.log("pelicula número:", i)
// };




//SEGUNDA ENTREGA

const peliculas = [
   { nombre: "Psicosis", año: 1960, directores: "Alfred Hitchcock", genero: "terror" },
   { nombre: "El Exorcista", año: 1973, directores: "William Friedkin", genero: "terror" },
   { nombre: "Nosferatu", año: 1922, directores: "F. W. Murnau", genero: "terror" },
   { nombre: "El Resplandor", año: 1980, directores: "Stanley Kubrick", genero: "terror" },
   { nombre: "La Noche de los Muertos Vivientes", año: 1968, directores: "George A. Romero", genero: "terror" },
   { nombre: "El Silencio de los Inocentes", año: 1974, directores: "Tobe Hooper", genero: "terror" },
   { nombre: "La Matanza de Texas", año: 1922, directores: "F. W. Murnau", genero: "terror" },
   { nombre: "Carrie", año: 1976, directores: "Brian De Palma", genero: "terror" },
   { nombre: "El Fantasma de la Ópera", año: 1925, directores: "Rupert Julian", genero: "terror" },
   { nombre: "Lo que el viento se llevó", año: 1939, directores: "Victor Fleming", genero: "drama" },
   { nombre: "Casablanca", año: 1942, directores: "Michael Curtiz", genero: "drama" },
   { nombre: "Cadena Perpetua", año: 1994, directores: "Frank Darabont", genero: "drama" },
   { nombre: "El Padrino", año: 1972, directores: "Francis Ford Coppola", genero: "drama" },
   { nombre: "Nacimiento de una Nación", año: 1915, directores: "D.W. Griffith", genero: "drama" },
   { nombre: "Cuentos de Tokio", año: 1953, directores: "Yasujirō Ozu", genero: "drama" },
   { nombre: "El Ciudadano Kane", año: 1941, directores: "Orson Welles", genero: "drama" },
   { nombre: "La Lista de Schindler", año: 1993, directores: "Steven Spielberg", genero: "drama" },
   { nombre: "Doce Hombres en Pugna", año: 1957, directores: "Sidney Lumet", genero: "drama" },
   { nombre: "El Graduado", año: 1967, directores: "Mike Nichols", genero: "drama" },
   { nombre: "Duro de Matar", año: 1988, directores: "John McTiernan", genero: "acción" },
   { nombre: "Terminator 2: Judgment Day", año: 1991, directores: "James Cameron", genero: "acción" },
   { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, directores: "Steven Spielberg", genero: "acción" },
   { nombre: "Máximo riesgo", año: 1993, directores: "Renny Harlin", genero: "acción" },
   { nombre: "Rápido y Furioso", año: 2001, directores: "Rob Cohen", genero: "acción" },
   { nombre: "Gladiator", año: 2000, directores: "Ridley Scott", genero: "acción" },
   { nombre: "Rocky", año: 1976, directores: "John G. Avildsen", genero: "acción" },
   { nombre: "Matrix", año: 1999, directores: "The Wachowskis", genero: "acción" },
   { nombre: "Mad Max: Fury Road", año: 2015, directores: "George Miller", genero: "acción" },
   { nombre: "Die Hard", año: 1988, directores: "John McTiernan", genero: "acción" },
   { nombre: "Annie Hall", año: 1977, directores: "Woody Allen", genero: "comedia" },
   { nombre: "Ghostbusters", año: 1984, directores: "Ivan Reitman", genero: "comedia" },
   { nombre: "Atrapado en el tiempo", año: 1993, directores: "Harold Ramis", genero: "comedia" },
   { nombre: "Superbad", año: 2007, directores: "Greg Mottola", genero: "comedia" },
   { nombre: "Desarrollo Arrestado", año: 2003, directores: "Mitchell Hurwitz", genero: "comedia" },
   { nombre: "Groundhog Day", año: 1993, directores: "Harold Ramis", genero: "comedia" },
   { nombre: "This Is Spinal Tap", año: 1984, directores: "Rob Reiner", genero: "comedia" },
   { nombre: "Ferris Bueller's Day Off", año: 1986, directores: "John Hughes", genero: "comedia" },
   { nombre: "The Grand Budapest Hotel", año: 2014, directores: "Wes Anderson", genero: "comedia" },
   { nombre: "Borat", año: 2006, directores: "Larry Charles", genero: "comedia" },
   { nombre: "2001: Una odisea del espacio", año: 1968, directores: "Stanley Kubrick", genero: "ciencia ficción" },
   { nombre: "Blade Runner", año: 1982, directores: "Ridley Scott", genero: "ciencia ficción" },
   { nombre: "Star Wars: Episodio IV - Una nueva esperanza", año: 1977, directores: "George Lucas", genero: "ciencia ficción" },
   { nombre: "Encuentros Cercanos del Tercer Tipo", año: 1977, directores: "Steven Spielberg", genero: "ciencia ficción" },
   { nombre: "Matrix", año: 1999, directores: "The Wachowskis", genero: "ciencia ficción" },
   { nombre: "El Día que la Tierra se Detuvo", año: 1951, directores: "Robert Wise", genero: "ciencia ficción" },
   { nombre: "E.T. el Extraterrestre", año: 1982, directores: "Steven Spielberg", genero: "ciencia ficción" },
   { nombre: "Blade Runner 2049", año: 2017, directores: "Denis Villeneuve", genero: "ciencia ficción" },
   { nombre: "Star Trek: la película", año: 1979, directores: "Robert Wise", genero: "ciencia ficción" },
   { nombre: "Regreso al Futuro", año: 1985, directores: "Robert Zemeckis", genero: "ciencia ficción" },
   { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, directores: "Steven Spielberg", genero: "aventura" },
   { nombre: "La Princesa Prometida", año: 1987, directores: "Rob Reiner", genero: "aventura" },
   { nombre: "Jurassic Park", año: 1993, directores: "Steven Spielberg", genero: "aventura" },
   { nombre: "Los Goonies", año: 1985, directores: "Richard Donner", genero: "aventura" },
   { nombre: "Piratas del Caribe: La maldición del Perla Negra", año: 2003, directores: "Gore Verbinski", genero: "aventura" },
   { nombre: "Los Cazadores del Arca Perdida", año: 1981, directores: "Steven Spielberg", genero: "aventura" },
   { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, directores: "Peter Jackson", genero: "aventura" },
   { nombre: "El Libro de la Selva", año: 1967, directores: "Wolfgang Reitherman", genero: "aventura" },
   { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff", genero: "aventura" },
   { nombre: "La Odisea del Espacio", año: 1968, directores: "Stanley Kubrick", genero: "aventura" },
   { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell", genero: "animadas" },
   { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff", genero: "animadas" },
   { nombre: "Toy Story", año: 1995, directores: "John Lasseter", genero: "animadas" },
   { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise", genero: "animadas" },
   { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee", genero: "animadas" },
   { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich", genero: "animadas" },
   { nombre: "El Viaje de Chihiro", año: 2001, directores: "Hayao Miyazaki", genero: "animadas" },
   { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker", genero: "animadas" },
   { nombre: "Up", año: 2009, directores: "Pete Docter, Bob Peterson", genero: "animadas" },
   { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker", genero: "animadas" },
   { nombre: "El Mago de Oz", año: 1939, directores: "Victor Fleming, King Vidor", genero: "fantasia" },
   { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, directores: "Peter Jackson", genero: "fantasia" },
   { nombre: "Harry Potter y la Piedra Filosofal", año: 2001, directores: "Chris Columbus", genero: "fantasia" },
   { nombre: "Laberinto", año: 1986, directores: "Jim Henson", genero: "fantasia" },
   { nombre: "El Viaje de Chihiro", año: 2001, directores: "Hayao Miyazaki", genero: "fantasia" },
   { nombre: "La Historia sin Fin", año: 1984, directores: "Wolfgang Petersen", genero: "fantasia" },
   { nombre: "El Laberinto del Fauno", año: 2006, directores: "Guillermo del Toro", genero: "fantasia" },
   { nombre: "Alice in Wonderland", año: 1951, directores: "Clyde Geronimi, Wilfred Jackson", genero: "fantasia" },
   { nombre: "Coco", año: 2017, directores: "Lee Unkrich, Adrian Molina", genero: "fantasia" },
   { nombre: "El Castillo Ambulante", año: 2004, directores: "Hayao Miyazaki", genero: "fantasia" }
]
console.log(peliculas)

const disney = [
   { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell" },
   { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
   { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise" },
   { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee" },
   { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich" },
   { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker" },
   { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker" },
   { nombre: "Zootopia", año: 2016, directores: "Byron Howard, Rich Moore" },
   { nombre: "Moana", año: 2016, directores: "Ron Clements, John Musker" },
   { nombre: "El Libro de la Selva", año: 1967, directores: "Wolfgang Reitherman" }
]



console.log(disney)


// Sort- Ordenar películas por orden alfabético
peliculas.sort((a, b) => {
   return a.nombre.localeCompare(b.nombre);
});

console.log(peliculas);


//boton con addEventListener

const btn = document.getElementById("btn");

btn.addEventListener('click', function () {
   alert("Se está ejecutando la peli")
})

const cambiarBC = document.getElementById("cambiarBC")

cambiarBC.addEventListener('click', function () {
   document.body.style.backgroundColor = 'blue';
});

//Boton menú desplegable

let menuBoton = document.getElementById("menuBoton")
let menu = document.getElementById("menu")

menuBoton.onclick = function () {
   menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
};


//Registro Persona

let form = document.getElementById("registroPersona")

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let nombrePersonaInput = document.getElementById("nombrePersona").value;
   let apellidoInput = document.getElementById("apellidoPersona").value;
   let mayorDeEdadInput = document.getElementById("mayorDeEdad").value;
   let emailInput = document.getElementById("emailPersona").value;

   if (mayorDeEdadInput < 18) {
      alert('No puedes registrarte, porque eres menor de edad')
   } else {
      const { value: formValues } = Swal.fire({
         title: "Nombre y apellido",
         html: `
              <input id="swal-input1" class="swal2-input">
              <input id="swal-input2" class="swal2-input">
            `,
         focusConfirm: false,
         preConfirm: () => {
            return [
               document.getElementById("swal-input1").value,
               document.getElementById("swal-input2").value
            ];
         }
      });
      if (formValues) {
         Swal.fire(JSON.stringify(formValues));
      }
   }
})

 const botonAlerta = document.getElementById ('botonAlerta')

 botonAlerta.addEventListener ('click',()=>{

Swal.fire("Película agregada")})

