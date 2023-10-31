const pokemonNameInput = document.getElementById("pokemonName");
const searchButton = document.getElementById("searchButton");
const pokemonInfo = document.getElementById("pokemonInfo");


// Get Pokemon Data - Obtiene la data de Pokemon
async function getPokemonData() {
      const pokemonName = pokemonNameInput.value.toLowerCase();
        try {
        // Fetch data from the Pokémon API - Fetch data de la API
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = response.data;

        // Update the HTML elements with Pokémon data
        document.getElementById("frontImage").src = data.sprites.front_default;
        document.getElementById("backImage").src = data.sprites.back_default;
        document.getElementById("name").textContent = data.name;
        document.getElementById("height").textContent = data.height / 10; // Height is in decimetres
        document.getElementById("weight").textContent = data.weight / 10; // Weight is in hectograms
        document.getElementById("hp").textContent = data.stats[0].base_stat;
        document.getElementById("attack").textContent = data.stats[1].base_stat;
        document.getElementById("defense").textContent = data.stats[2].base_stat;
        document.getElementById("speed").textContent = data.stats[5].base_stat;
        document.getElementById("type").textContent = data.types.map(type => type.type.name).join(", ");
      } catch (error) {
        renderNotFound()
      }
    }

    searchButton.addEventListener("click", getPokemonData);
    pokemonNameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            getPokemonData();
        }
    });
 
    const renderNotFound = () => {
        pokeName.textContent = 'No encontrado';
        pokeImg.setAttribute('src', 'img/pokemon-img-01.png');
        pokeImg.style.background =  '#fff';
        pokeImg.style.borderRadius = '50px';
        pokeTypes.innerHTML = '';
        pokeStats.innerHTML = '';
        pokeId.textContent = '';
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