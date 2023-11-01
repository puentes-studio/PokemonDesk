// VARIABLES
const pokemonNameInput = document.getElementById("pokemon-name");
const pokemonCardContainer = document.getElementById("pokemon-img");
const pokemonNameContent = document.getElementById("name");
const pokemonImgSrcFront = document.getElementById("front-image");
const pokemonImgSrcBack = document.getElementById("back-image");
const pokemonImgSrcFrontShiny = document.getElementById("front-image-shiny");
const pokemonImgSrcBackShiny = document.getElementById("back-image-shiny");
const pokemonWeightContent = document.getElementById("weight");
const pokemonHeightContent = document.getElementById("height");
const pokemonHpContent = document.getElementById("hp");
const pokemonAttackContent = document.getElementById("attack");
const pokemonDefenseContent = document.getElementById("defense");
const pokemonSpeedContent = document.getElementById("speed");
const errorSpan = document.getElementById("no-pokemon");

// FUNCIONES
function displayPokemonInfo(data) {
  pokemonNameContent.textContent = data.name;
  pokemonImgSrcFront.src = data.sprites.front_default;
  pokemonImgSrcBack.src = data.sprites.back_default;
  pokemonWeightContent.textContent = data.weight / 10 + " kg";
  pokemonHeightContent.textContent = data.height / 10 + " m";
  pokemonHpContent.textContent = data.stats[0].base_stat;
  pokemonAttackContent.textContent = data.stats[1].base_stat;
  pokemonDefenseContent.textContent = data.stats[2].base_stat;
  pokemonSpeedContent.textContent = data.stats[5].base_stat;
  pokemonImgSrcFrontShiny.src = data.sprites.front_shiny;
  pokemonImgSrcBackShiny.src = data.sprites.back_shiny;
}

function removePokemonInfo() {
  pokemonNameContent.textContent = "";
  pokemonImgSrcFront.src = "";
  pokemonImgSrcBack.src = "";
  pokemonWeightContent.textContent = "";
  pokemonHeightContent.textContent = "";
  pokemonHpContent.textContent = "";
  pokemonAttackContent.textContent = "";
  pokemonDefenseContent.textContent = "";
  pokemonSpeedContent.textContent = "";
  pokemonImgSrcFrontShiny.src = "";
  pokemonImgSrcBackShiny.src = "";
}

function showShiny() {
  pokemonImgSrcFrontShiny.style.opacity = 1;
}

function hideShiny() {
  pokemonImgSrcFrontShiny.style.opacity = 0;
}

function hideCardContainer() {
  pokemonCardContainer.style.opacity = 0;
}

function showCardContainer() {
  pokemonCardContainer.style.opacity = 1;
}

function showErrorMsg() {
  errorSpan.style.opacity = 1;
}

function hideErrorMsg() {
  errorSpan.style.opacity = 0;
}

function isValidPokemonName(pokemonName) {
  console.log({ validation: pokemonName.trim(), pokemonName });
  return pokemonName.trim() !== "";
}

function capitalizeFirstLetter(string) {
  string.charAt(0).toUpperCase() + string.slice(1);
}

function handleDataApi(data) {
  data.name = capitalizeFirstLetter(data.name);
  displayPokemonInfo(data);
  showCardContainer();
}

function handleErrorApi(error) {
  hideCardContainer();
  removePokemonInfo();
  showErrorMsg();
  console.error("Error al cargar los datos del Pokémon: ", error);
}

function searchPokemon() {
  const pokemonName = pokemonNameInput.value.toLowerCase();
  if (!isValidPokemonName(pokemonName)) {
    return alert("Ingrese un nombre de Pokémon válido.");
  }

  // LLAMADA API
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then(handleDataApi)
    .catch(handleErrorApi);
}

// EVENTOS
pokemonNameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchPokemon();
  }
});




 