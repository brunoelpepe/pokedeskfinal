/* PROPUESTA DE MEJORA */

let pokemonData = []; // Un arreglo vacío para almacenar los datos de los pokémon
let currentIndex = 0; // Índice actual utilizado para mostrar el pokémon en pantalla

// Función para obtener los datos de un pokémon mediante una URL
const getPokemon = (url) => {
    return fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
            return data; // Retorna los datos del pokémon
        })
        .catch((error) => {
            console.error("Error:", error); // Manejo de errores en caso de que ocurra un problema con la solicitud
        });
};

// Función para obtener los datos de los personajes (pokémon) desde la API
const getCharacters = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=1000") // Realiza una solicitud a la API para obtener una lista de personajes
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
            const pokemonPromises = data.results.map((personaje) =>
                getPokemon(personaje.url)
            ); // Crea un array de promesas para obtener los datos de cada pokémon en la lista

            return Promise.all(pokemonPromises) // Espera a que se resuelvan todas las promesas
                .then((pokemonData) => {
                    return pokemonData; // Retorna los datos de los pokémon
                })
                .catch((error) => {
                    console.error("Error:", error); // Manejo de errores en caso de que ocurra un problema con las promesas
                });
        })
        .catch((error) => {
            console.error("Error:", error); // Manejo de errores en caso de que ocurra un problema con la solicitud
        });
};

// Función para mostrar los datos del pokémon en la tarjeta
const showPokemon = (index) => {
    const pokemonContainer = document.querySelector(".card-container");
    const currentPokemon = pokemonData[index]; // Obtiene los datos del pokémon actual en base al índice
    pokemonContainer.innerHTML = `
    <h3>${currentPokemon.name}</h3>
    <div class="card">
        <div class="front">
            <img src=${currentPokemon.sprites.front_default} />
        </div>
        <div class="back">
            <img src=${currentPokemon.sprites.back_default ?? currentPokemon.sprites.front_default} />
        </div>
    </div>
  `;
};

// Función para seleccionar un pokémon aleatorio
const randomizePokemon = () => {
    const randomIndex = Math.floor(Math.random() * pokemonData.length); // Genera un índice aleatorio dentro del rango de los datos de los pokémon
    currentIndex = randomIndex; // Actualiza el índice actual con el índice aleatorio
    showPokemon(currentIndex); // Muestra el pokémon aleatorio en la tarjeta
};

// Función para mostrar el siguiente pokémon en la tarjeta
const nextPokemon = () => {
    currentIndex = (currentIndex + 1) % pokemonData.length; // Incrementa el índice actual y asegura que se mantenga dentro del rango válido
    showPokemon(currentIndex); // Muestra el siguiente pokémon en la tarjeta
};

// Función para mostrar el pokémon anterior en la tarjeta
const previousPokemon = () => {
    currentIndex = (currentIndex - 1 + pokemonData.length) % pokemonData.length; // Decrementa el índice actual y asegura que se mantenga dentro del rango válido
    showPokemon(currentIndex); // Muestra el pokémon anterior en la tarjeta
};

getCharacters()
    .then((data) => {
        // Obtiene los datos de los pokémon
        pokemonData = data; // Asigna los datos obtenidos al arreglo pokemonData
        randomizePokemon(); // Muestra un pokémon aleatorio al cargar la página
    })
    .catch((error) => {
        console.error("Error:", error); // Manejo de errores en caso de que ocurra un problema al obtener los datos de los pokémon
    });