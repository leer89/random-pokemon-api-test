const randomId = Math.floor(Math.random() * 100)

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

window.fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}/`, requestOptions)
  .then(response => response.json())
  .then(pokemon => {
    console.log(pokemon)
    document.getElementById('heading').textContent = pokemon.name
    document.getElementById('picture').src = pokemon.sprites.back_default
  })
  .catch(error => console.log('error', error));