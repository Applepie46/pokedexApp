const userController = {
    getAllPokemons: (req, res) => {
        try {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0")
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
            fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
                .then(response => response.json())
                .then(pokemon => {
                    res.render("pokemonDetail", { pokemon });
                })
        } catch (error) {
            res.render("error");
            console.log(error);
        }
    }
};

module.exports = userController;