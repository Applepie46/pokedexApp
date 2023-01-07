/* WE NEED TO CONVERTI THIS HELPER INTO A FUNCTION THAT RETURNS AN OBJECT WITH POKEMONS NAME AND ID
THEN WE CALL THIS FUNCTION INTO THE POKEMON CONTROLLER WHERE IT CAN GETS SHOOT BY PUTING THE API
 ENDPOINT INTO THE PROPERTIES */



//let url = "https://pokeapi.co/api/v2/pokemon?limit=719&offset=0";

const getPokemons = async (url) => {
    try {
    let pokemons = [];
    const resp = await fetch(url);
    const data =  await resp.json();
    const pokemonsArray = data.results;

    pokemonsArray.forEach((pokemon, i) => {
        pokemons.push({
            name: pokemon.name,
            id: i + 1

        });
    })

    return pokemons;
    } catch(error) {
        console.log(error);
    }
    
}

module.exports = getPokemons;

 