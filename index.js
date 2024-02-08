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


// //FUNCIONES 1
// function peliculasTerrorNuevas() {
//     console.log("La espera")
//     console.log("Hablame")
//     console.log("Llaman a la puerta")
//     console.log("Posesión infernal")

// }
// peliculasTerrorNuevas();


// //OBJETOS

// const PELICULASTERROR = [
//     { nombre: "Psicosis", año: 1960, director: "Alfred Hitchcock", },
//     { nombre: "El Exorcista", año: 1973, director: "William Friedkin", },
//     { nombre: "Nosferatu", año: 1922, director: "F. W. Murnau", },
//     { nombre: "El Resplandor", año: 1980, director: "Stanley Kubrick", },
//     { nombre: "La Noche de los Muertos Vivientes", año: 1968, director: "George A. Romero", },
//     { nombre: "El Silencio de los Inocentes", año: 1974, director: "Tobe Hooper", },
//     { nombre: "La Matanza de Texas", año: 1922, director: "F. W. Murnau", },
//     { nombre: "Carrie", año: 1976, director: "Brian De Palma", },
//     { nombre: "El Fantasma de la Ópera", año: 1925, director: "Rupert Julian", },
// ]
// console.log(PELICULASTERROR);

// const PELICULASDRAMA = [
//     { nombre: "Lo que el viento se llevó", año: 1939, director: "Victor Fleming" },
//     { nombre: "Casablanca", año: 1942, director: "Michael Curtiz" },
//     { nombre: "Cadena Perpetua", año: 1994, director: "Frank Darabont" },
//     { nombre: "El Padrino", año: 1972, director: "Francis Ford Coppola" },
//     { nombre: "Nacimiento de una Nación", año: 1915, director: "D.W. Griffith" },
//     { nombre: "Cuentos de Tokio", año: 1953, director: "Yasujirō Ozu" },
//     { nombre: "El Ciudadano Kane", año: 1941, director: "Orson Welles" },
//     { nombre: "La Lista de Schindler", año: 1993, director: "Steven Spielberg" },
//     { nombre: "Doce Hombres en Pugna", año: 1957, director: "Sidney Lumet" },
//     { nombre: "El Graduado", año: 1967, director: "Mike Nichols" }
// ];

// console.log(PELICULASDRAMA);

// const PELICULASACCION = [
//     { nombre: "Duro de Matar", año: 1988, director: "John McTiernan", },
//     { nombre: "Terminator 2: Judgment Day", año: 1991, director: "James Cameron", },
//     { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, director: "Steven Spielberg", },
//     { nombre: "Máximo riesgo", año: 1993, director: "Renny Harlin" },
//     { nombre: "Rápido y Furioso", año: 2001, director: "Rob Cohen" },
//     { nombre: "Gladiator", año: 2000, director: "Ridley Scott" },
//     { nombre: "Rocky", año: 1976, director: "John G. Avildsen" },
//     { nombre: "Matrix", año: 1999, director: "The Wachowskis" },
//     { nombre: "Mad Max: Fury Road", año: 2015, director: "George Miller" },
//     { nombre: "Die Hard", año: 1988, director: "John McTiernan" }
// ];

// console.log(PELICULASACCION);

// const PELICULASCOMEDIA = [
//     { nombre: "Annie Hall", año: 1977, director: "Woody Allen" },
//     { nombre: "Ghostbusters", año: 1984, director: "Ivan Reitman" },
//     { nombre: "Atrapado en el tiempo", año: 1993, director: "Harold Ramis" },
//     { nombre: "Superbad", año: 2007, director: "Greg Mottola" },
//     { nombre: "Desarrollo Arrestado", año: 2003, director: "Mitchell Hurwitz" },
//     { nombre: "Groundhog Day", año: 1993, director: "Harold Ramis" },
//     { nombre: "This Is Spinal Tap", año: 1984, director: "Rob Reiner" },
//     { nombre: "Ferris Bueller's Day Off", año: 1986, director: "John Hughes" },
//     { nombre: "The Grand Budapest Hotel", año: 2014, director: "Wes Anderson" },
//     { nombre: "Borat", año: 2006, director: "Larry Charles" }
// ];

// console.log(PELICULASCOMEDIA);

// const PELICULASCIENCIAFICCION = [
//     { nombre: "2001: Una odisea del espacio", año: 1968, director: "Stanley Kubrick" },
//     { nombre: "Blade Runner", año: 1982, director: "Ridley Scott" },
//     { nombre: "Star Wars: Episodio IV - Una nueva esperanza", año: 1977, director: "George Lucas" },
//     { nombre: "Encuentros Cercanos del Tercer Tipo", año: 1977, director: "Steven Spielberg" },
//     { nombre: "Matrix", año: 1999, directores: "The Wachowskis" },
//     { nombre: "El Día que la Tierra se Detuvo", año: 1951, director: "Robert Wise" },
//     { nombre: "E.T. el Extraterrestre", año: 1982, director: "Steven Spielberg" },
//     { nombre: "Blade Runner 2049", año: 2017, director: "Denis Villeneuve" },
//     { nombre: "Star Trek: la película", año: 1979, director: "Robert Wise" },
//     { nombre: "Regreso al Futuro", año: 1985, director: "Robert Zemeckis" }
// ];

// console.log(PELICULASCIENCIAFICCION);

// const PELICULASAVENTURA = [
//     { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, director: "Steven Spielberg" },
//     { nombre: "La Princesa Prometida", año: 1987, director: "Rob Reiner" },
//     { nombre: "Jurassic Park", año: 1993, director: "Steven Spielberg" },
//     { nombre: "Los Goonies", año: 1985, director: "Richard Donner" },
//     { nombre: "Piratas del Caribe: La maldición del Perla Negra", año: 2003, director: "Gore Verbinski" },
//     { nombre: "Los Cazadores del Arca Perdida", año: 1981, director: "Steven Spielberg" },
//     { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, director: "Peter Jackson" },
//     { nombre: "El Libro de la Selva", año: 1967, director: "Wolfgang Reitherman" },
//     { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
//     { nombre: "La Odisea del Espacio", año: 1968, director: "Stanley Kubrick" }
// ];

// console.log(PELICULASAVENTURA);

// const PELICULASANIMADAS = [
//     { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell" },
//     { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
//     { nombre: "Toy Story", año: 1995, directores: "John Lasseter" },
//     { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise" },
//     { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee" },
//     { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich" },
//     { nombre: "El Viaje de Chihiro", año: 2001, director: "Hayao Miyazaki" },
//     { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker" },
//     { nombre: "Up", año: 2009, directores: "Pete Docter, Bob Peterson" },
//     { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker" }
// ];

// console.log(PELICULASANIMADAS);

// const PELICULASDISNEY = [
//     { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell" },
//     { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
//     { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise" },
//     { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee" },
//     { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich" },
//     { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker" },
//     { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker" },
//     { nombre: "Zootopia", año: 2016, directores: "Byron Howard, Rich Moore" },
//     { nombre: "Moana", año: 2016, directores: "Ron Clements, John Musker" },
//     { nombre: "El Libro de la Selva", año: 1967, director: "Wolfgang Reitherman" }
// ];

// console.log(PELICULASDISNEY);

// const PELICULASFANTASIA = [
//     { nombre: "El Mago de Oz", año: 1939, directores: "Victor Fleming, King Vidor" },
//     { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, director: "Peter Jackson" },
//     { nombre: "Harry Potter y la Piedra Filosofal", año: 2001, director: "Chris Columbus" },
//     { nombre: "Laberinto", año: 1986, director: "Jim Henson" },
//     { nombre: "El Viaje de Chihiro", año: 2001, director: "Hayao Miyazaki" },
//     { nombre: "La Historia sin Fin", año: 1984, director: "Wolfgang Petersen" },
//     { nombre: "El Laberinto del Fauno", año: 2006, director: "Guillermo del Toro" },
//     { nombre: "Alice in Wonderland", año: 1951, directores: "Clyde Geronimi, Wilfred Jackson" },
//     { nombre: "Coco", año: 2017, directores: "Lee Unkrich, Adrian Molina" },
//     { nombre: "El Castillo Ambulante", año: 2004, director: "Hayao Miyazaki" }
// ];

// console.log(PELICULASFANTASIA);

// //Arrays

// // Array de géneros
// const generos = ["Terror", "Ciencia Ficción", "Drama", "Aventura", "Comedia", "Animadas", "Fantasía"];

// // Array de directores
// const directores = ["Alfred Hitchcock", "William Friedkin", "Ridley Scott", "Steven Spielberg", "Stanley Kubrick", "James Cameron"];

const peliculas = {
    Terror: [
      { nombre: "Psicosis", año: 1960, director: "Alfred Hitchcock" },
      { nombre: "El Exorcista", año: 1973, director: "William Friedkin" },
      { nombre: "Nosferatu", año: 1922, director: "F. W. Murnau" },
      { nombre: "El Resplandor", año: 1980, director: "Stanley Kubrick" },
      { nombre: "La Noche de los Muertos Vivientes", año: 1968, director: "George A. Romero" },
      { nombre: "El Silencio de los Inocentes", año: 1974, director: "Tobe Hooper" },
      { nombre: "La Matanza de Texas", año: 1922, director: "F. W. Murnau" },
      { nombre: "Carrie", año: 1976, director: "Brian De Palma" },
      { nombre: "El Fantasma de la Ópera", año: 1925, director: "Rupert Julian" }
    ],
    Drama: [
      { nombre: "Lo que el viento se llevó", año: 1939, director: "Victor Fleming" },
      { nombre: "Casablanca", año: 1942, director: "Michael Curtiz" },
      { nombre: "Cadena Perpetua", año: 1994, director: "Frank Darabont" },
      { nombre: "El Padrino", año: 1972, director: "Francis Ford Coppola" },
      { nombre: "Nacimiento de una Nación", año: 1915, director: "D.W. Griffith" },
      { nombre: "Cuentos de Tokio", año: 1953, director: "Yasujirō Ozu" },
      { nombre: "El Ciudadano Kane", año: 1941, director: "Orson Welles" },
      { nombre: "La Lista de Schindler", año: 1993, director: "Steven Spielberg" },
      { nombre: "Doce Hombres en Pugna", año: 1957, director: "Sidney Lumet" },
      { nombre: "El Graduado", año: 1967, director: "Mike Nichols" }
    ],
    Accion: [
      { nombre: "Duro de Matar", año: 1988, director: "John McTiernan" },
      { nombre: "Terminator 2: Judgment Day", año: 1991, director: "James Cameron" },
      { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, director: "Steven Spielberg" },
      { nombre: "Máximo riesgo", año: 1993, director: "Renny Harlin" },
      { nombre: "Rápido y Furioso", año: 2001, director: "Rob Cohen" },
      { nombre: "Gladiator", año: 2000, director: "Ridley Scott" },
      { nombre: "Rocky", año: 1976, director: "John G. Avildsen" },
      { nombre: "Matrix", año: 1999, director: "The Wachowskis" },
      { nombre: "Mad Max: Fury Road", año: 2015, director: "George Miller" },
      { nombre: "Die Hard", año: 1988, director: "John McTiernan" }
    ],
    Comedia: [
      { nombre: "Annie Hall", año: 1977, director: "Woody Allen" },
      { nombre: "Ghostbusters", año: 1984, director: "Ivan Reitman" },
      { nombre: "Atrapado en el tiempo", año: 1993, director: "Harold Ramis" },
      { nombre: "Superbad", año: 2007, director: "Greg Mottola" },
      { nombre: "Desarrollo Arrestado", año: 2003, director: "Mitchell Hurwitz" },
      { nombre: "Groundhog Day", año: 1993, director: "Harold Ramis" },
      { nombre: "This Is Spinal Tap", año: 1984, director: "Rob Reiner" },
      { nombre: "Ferris Bueller's Day Off", año: 1986, director: "John Hughes" },
      { nombre: "The Grand Budapest Hotel", año: 2014, director: "Wes Anderson" },
      { nombre: "Borat", año: 2006, director: "Larry Charles" }
    ],
    CienciaFiccion: [
      { nombre: "2001: Una odisea del espacio", año: 1968, director: "Stanley Kubrick" },
      { nombre: "Blade Runner", año: 1982, director: "Ridley Scott" },
      { nombre: "Star Wars: Episodio IV - Una nueva esperanza", año: 1977, director: "George Lucas" },
      { nombre: "Encuentros Cercanos del Tercer Tipo", año: 1977, director: "Steven Spielberg" },
      { nombre: "Matrix", año: 1999, director: "The Wachowskis" },
      { nombre: "El Día que la Tierra se Detuvo", año: 1951, director: "Robert Wise" },
      { nombre: "E.T. el Extraterrestre", año: 1982, director: "Steven Spielberg" },
      { nombre: "Blade Runner 2049", año: 2017, director: "Denis Villeneuve" },
      { nombre: "Star Trek: la película", año: 1979, director: "Robert Wise" },
      { nombre: "Regreso al Futuro", año: 1985, director: "Robert Zemeckis" }
    ],
    Aventura: [
      { nombre: "Indiana Jones: En busca del arca perdida", año: 1981, director: "Steven Spielberg" },
      { nombre: "La Princesa Prometida", año: 1987, director: "Rob Reiner" },
      { nombre: "Jurassic Park", año: 1993, director: "Steven Spielberg" },
      { nombre: "Los Goonies", año: 1985, director: "Richard Donner" },
      { nombre: "Piratas del Caribe: La maldición del Perla Negra", año: 2003, director: "Gore Verbinski" },
      { nombre: "Los Cazadores del Arca Perdida", año: 1981, director: "Steven Spielberg" },
      { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, director: "Peter Jackson" },
      { nombre: "El Libro de la Selva", año: 1967, director: "Wolfgang Reitherman" },
      { nombre: "El Rey León", año: 1994, director: "Roger Allers, Rob Minkoff" },
      { nombre: "La Odisea del Espacio", año: 1968, director: "Stanley Kubrick" }
    ],
    Animadas: [
      { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell" },
      { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
      { nombre: "Toy Story", año: 1995, director: "John Lasseter" },
      { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise" },
      { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee" },
      { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich" },
      { nombre: "El Viaje de Chihiro", año: 2001, director: "Hayao Miyazaki" },
      { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker" },
      { nombre: "Up", año: 2009, directores: "Pete Docter, Bob Peterson" },
      { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker" }
    ],
    Disney: [
      { nombre: "Blanca Nieves y los Siete Enanitos", año: 1937, directores: "David Hand y William Cottrell" },
      { nombre: "El Rey León", año: 1994, directores: "Roger Allers, Rob Minkoff" },
      { nombre: "La Bella y la Bestia", año: 1991, directores: "Gary Trousdale, Kirk Wise" },
      { nombre: "Frozen", año: 2013, directores: "Chris Buck, Jennifer Lee" },
      { nombre: "Buscando a Nemo", año: 2003, directores: "Andrew Stanton, Lee Unkrich" },
      { nombre: "Aladdin", año: 1992, directores: "Ron Clements, John Musker" },
      { nombre: "La Sirenita", año: 1989, directores: "Ron Clements, John Musker" },
      { nombre: "Zootopia", año: 2016, directores: "Byron Howard, Rich Moore" },
      { nombre: "Moana", año: 2016, directores: "Ron Clements, John Musker" },
      { nombre: "El Libro de la Selva", año: 1967, director: "Wolfgang Reitherman" }
    ],
    Fantasia: [
      { nombre: "El Mago de Oz", año: 1939, directores: "Victor Fleming, King Vidor" },
      { nombre: "El Señor de los Anillos: La Comunidad del Anillo", año: 2001, director: "Peter Jackson" },
      { nombre: "Harry Potter y la Piedra Filosofal", año: 2001, director: "Chris Columbus" },
      { nombre: "Laberinto", año: 1986, director: "Jim Henson" },
      { nombre: "El Viaje de Chihiro", año: 2001, director: "Hayao Miyazaki" },
      { nombre: "La Historia sin Fin", año: 1984, director: "Wolfgang Petersen" },
      { nombre: "El Laberinto del Fauno", año: 2006, director: "Guillermo del Toro" },
      { nombre: "Alice in Wonderland", año: 1951, directores: "Clyde Geronimi, Wilfred Jackson" },
      { nombre: "Coco", año: 2017, directores: "Lee Unkrich, Adrian Molina" },
      { nombre: "El Castillo Ambulante", año: 2004, director: "Hayao Miyazaki" }
    ]
  };
  
  const generos = Object.keys(peliculas);
  
  const directores = [
    "Alfred Hitchcock",
    "William Friedkin",
    "Ridley Scott",
    "Steven Spielberg",
    "Stanley Kubrick",
    "James Cameron",
    "Frank Darabont",
    "Victor Fleming",
    "Michael Curtiz",
    "Francis Ford Coppola",
    "D.W. Griffith",
    "Yasujirō Ozu",
    "Orson Welles",
    "Sidney Lumet",
    "Mike Nichols",
    "John McTiernan",
    "Renny Harlin",
    "Rob Cohen",
    "John G. Avildsen",
    "The Wachowskis",
    "Ivan Reitman",
    "Harold Ramis",
    "Greg Mottola",
    "Mitchell Hurwitz",
    "Rob Reiner",
    "John Hughes",
    "Wes Anderson",
    "Larry Charles",
    "George Lucas",
    "Denis Villeneuve",
    "Robert Wise",
    "George Miller",
    "Richard Donner",
    "Gore Verbinski",
    "Peter Jackson",
    "Wolfgang Reitherman",
    "Roger Allers",
    "Rob Minkoff",
    "John Lasseter",
    "Gary Trousdale",
    "Kirk Wise",
    "Chris Buck",
    "Jennifer Lee",
    "Andrew Stanton",
    "Lee Unkrich",
    "Ron Clements",
    "Byron Howard",
    "Rich Moore",
    "Ron Clements",
    "Hayao Miyazaki",
    "Chris Columbus",
    "Jim Henson",
    "Wolfgang Petersen",
    "Guillermo del Toro",
    "Clyde Geronimi",
    "Wilfred Jackson",
    "Adrian Molina"
  ];
  
  console.log(peliculas);
  console.log(generos);
  console.log(directores);
  
// Sort- ordenar peliculas por orden alfabético 
for (let genero in peliculas) {
    peliculas[genero].sort((a, b) => {
      return a.nombre.localeCompare(b.nombre);
    });
  }
  
  // Mostrar películas ordenadas alfabéticamente
  for (let genero in peliculas) {
    console.log(`Películas de ${genero}:`);
    peliculas[genero].forEach(pelicula => {
      console.log(`- ${pelicula.nombre}`);
    });
  }
  

