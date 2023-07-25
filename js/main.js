const getCharacters = (done) => {

    const results = fetch(`https://pokeapi.co/api/v2/pokemon/`)

    results
        .then((response) => response.json())
        .then((data) => {
            done(data);
        }); //console.log(done)
}

getCharacters(data => {

    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(`
        <div class="slider">
            <span class="titulo">
                <img src="https://camo.githubusercontent.com/418d92ecbe7cd1805153001a34147ab7c965103432ff4a68eaa2fc5d4e6c1b42/68747470733a2f2f696b2e696d6167656b69742e696f2f6877796b73766a3469762f706f6b656465785f4e5f576757724a4b30732e706e67" alt="">
            </span>
            
            <div style="--i:1"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="">
            <div style="--i:2"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/303.png" alt=""></div>
            <div style="--i:3"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png" alt=""></div>
            <div style="--i:4"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png" alt=""></div>
            <div style="--i:5"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt=""></div>
            <div style="--i:6"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt=""></div>
            <div style="--i:7"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" alt=""></div>
            <div style="--i:8"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png" alt=""></div>
        </div>
        `);

        const main = document.querySelector("main");
        main.append(article)

    });
})


/* const pokemonContainer = document.querySelector(".pokemon-container"); */

/* function fetchPokemones (number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
} */

/* function createPokemon(pokemon) {

    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    /////

    const meterDatos = document.getElementById('card1');
    meterDatos.innerHTML = `<img src= card />`;

    //////

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);

}

fetchPokemones(1); */

