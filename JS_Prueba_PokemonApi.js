async function getPokemonData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    try {
      // Fetch data from the Pokémon API
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
      console.error("Error fetching Pokémon data:", error);
      alert("No se encontró ningún Pokémon con ese nombre.");
    }
  }