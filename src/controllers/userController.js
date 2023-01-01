 const userController = {
    getAllPokemons: async (req, res) => {
        /*try {

            const namesArray = [];

            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0");
            const data = await resp.json();
            const ids = data.results.forEach(pokemon => {
                namesArray.push(pokemon.name);
            })
            console.log(namesArray);
            
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${ids.name}`)
            .then(resp => resp.json())
            .then(pokemon => console.log(pokemon))

        }  catch(error) {
            console.log(error);
            res.render("error", { error });
        }*/
        try {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=719&offset=0")
                .then(response => response.json())
                .then(data => {
                    res.render("pokemonList", { data })
                })
        } catch (error) {
            res.render("error");
            console.log(error);
        }
    }, 
    pokemonDetail: (req, res) => {
        try {
            console.log(req.params.id);
            Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`).then(response => response.json()),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${req.params.id}`).then(response => response.json())
            ]).then(([pokemon, species]) => {
                res.render("pokemonDetail", {pokemon, species});
            })
            
        } catch (error) {
            console.log(error);
            res.render("error", { error });
            
        }
    }
};

/* fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`).then(response => response.json())
                .then(pokemon => {
                    res.render("pokemonDetail", { pokemon });
                })*/

module.exports = userController;