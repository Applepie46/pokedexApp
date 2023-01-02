 const getPokemons = require("../helpers/getPokemons");
 
 const pokemonController = {
    getAllPokemons: async (req, res) => {
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
    },
    searchPokemons: async (req, res) => {
        try {
            await getPokemons("https://pokeapi.co/api/v2/pokemon?limit=719&offset=0")
            .then(pokemons =>
                console.log(pokemons))
        }catch(error) {
            res.render(error);
            console.log(error);
        }
    }
}

module.exports = pokemonController;