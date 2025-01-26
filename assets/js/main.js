const offset = 0;
const limit = 20;

let pokemonsList = document.getElementById("pokemonsList");

// fetch(url)
//   .then((response) => {
//     console.log(response); // response antes de ser convertido
//     return response.json(); // response convertido
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(`👍 Requisicao concluida`);
//   });

// 👆 Forma mais verbosa

function createLiPokemonType(pokemonType) {
  return pokemonType.map(
    (typeSlot) =>
      `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`
  );
}

function createLiPokemon(pokemon) {
  return `
<li class="pokemon ${pokemon.type}">
            <div class="header">
              <span class="name">${pokemon.name}</span>
              <span class="number">#${pokemon.number}</span>
            </div>
            <div class="details">
              <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
              </ol>
              <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
          </li>       
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(createLiPokemon).join("");
    pokemonsList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);
