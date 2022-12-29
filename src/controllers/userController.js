const userController = {
    getAllPokemons: async (req, res) => {
        try {
            await fetch("https://pokeapi.co/api/v2/pokemon?limit=1154&offset=0")
                .then(response => response.json())
                .then(data => {
                    res.render("pokemonList", { data })
                })
        } catch (error) {
            res.render("error");
            console.log(error);
        }
    }
};

module.exports = userController;