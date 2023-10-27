'use strict';

const URL = "https://rickandmortyapi.com/api/character";

const ulElementCharacters = document.querySelector("ul")

// Muestra en la consola lo que ha buscado el usuario en el formulario, al hacer click en la lupa de buscar.
function search() {
    let searchResult = document.getElementById("searchpokemon").value;
    console.log(searchResult) }

// Valida que haya un resultado y muestra la imagen.
    if (searchResult) {
        const pokemonImage = document.createElement("img");
        pokemonImage.src = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${searchResult}.png`
        document.body.appen }