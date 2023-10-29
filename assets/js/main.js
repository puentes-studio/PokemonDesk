'use strict';

document.getElementById("search-button").addEventListener("click", searchPokemon);
        document.getElementById("pokemon-name").addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                searchPokemon();
            }
        });

function searchPokemon() {
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    if (pokemonName.trim() === "") {
        alert("Ingrese un nombre de Pokémon válido.");
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => {
            console.error("Error al cargar los datos del Pokémon: ", error);
            alert("No se encontró un Pokémon con ese nombre.");
        });
}

function displayPokemonInfo(data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("front-image").src = data.sprites.front_default;
    document.getElementById("back-image").src = data.sprites.back_default;
    document.getElementById("weight").textContent = (data.weight / 10) + " kg";
    document.getElementById("height").textContent = (data.height / 10) + " m";
    document.getElementById("hp").textContent = data.stats[0].base_stat;
    document.getElementById("attack").textContent = data.stats[1].base_stat;
    document.getElementById("defense").textContent = data.stats[2].base_stat;
    document.getElementById("speed").textContent = data.stats[5].base_stat;
}
 


// const URL = "https://rickandmortyapi.com/api/character";

// const ulElementCharacters = document.querySelector("ul")

// // Muestra en la consola lo que ha buscado el usuario en el formulario, al hacer click en la lupa de buscar.
// function search() {
//     let searchResult = document.getElementById("searchpokemon").value;
//     console.log(searchResult) }

// // Valida que haya un resultado y muestra la imagen.
//     if (searchResult) {
//         const pokemonImage = document.createElement("img");
//         pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${searchResult}.png`
//         document.body.appen }