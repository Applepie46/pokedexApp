//const getPokemons = require("../helpers/getPokemons");

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
                res.render("pokemonDetail", { pokemon, species });
            })

        } catch (error) {
            console.log(error);
            res.render("error", { error });

        }
    },
    searchPokemons: async (req, res) => {
        try {
            let pokemonsArray = [];
            console.log(req.body.searchBar.trim().toLowerCase());
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=719&offset=0");
            const data = await resp.json();
            data.results.forEach(pokemon => {
                pokemonsArray.push(pokemon.name);
            })
            //console.log(pokemonsArray);

            if (req.body.searchBar.trim().toLowerCase()) {
                let pokemonFound = pokemonsArray.indexOf(req.body.searchBar.trim().toLowerCase());
                console.log(pokemonFound);
                if (pokemonFound == -1) {
                    res.render("error", { error: "Pokemon not found" })
                } else {
                    res.redirect(`/pokemonDetail/${pokemonFound + 1}`)
                }
            } else {
                res.redirect("/");
            }

            /*for (let i = 0; i < pokemonsArray.length; i++) {
                if ((req.body.searchBar.trim().toLowerCase() == pokemonsArray[i]) == true) {
                    console.log(i);
                    res.redirect(`/pokemonDetail/${ i + 1 }`)
                    break
                } else {
                    res.render("error", { error: "Pokemon not found"})
                    break
                }
            }*/
            //pokemonsArray.find(req.query.searchBar.trim().toLowerCase())
            /*getPokemons("https://pokeapi.co/api/v2/pokemon?limit=719&offset=0")
                .then(pokemons => {
                    let pokemonsArray = pokemons;
                    if (req.query.searchBar) {
                        for (let i = 0; i < pokemonsArray.length; i++) {
                            //let pokemonFound = ;
                            if (pokemonsArray[i].name.includes(req.query.searchBar.trim().toLowerCase())) {
                                res.redirect(`/pokemonDetail/${ pokemonsArray[i].id }`)
                                break
                            } else {
                                res.render("error", { error: "Pokemon not found"})
                                break
                            }  
                        }
                        /*console.log(pokemons);
                        console.log(pokemons.id);
                        pokemons.forEach((pokemon, i) => {
                            if (req.query.searchBar.trim().toLowerCase() == pokemon.name || req.query.searchBar.trim().toLowerCase() == pokemon.id ) {
                                return res.redirect(`/pokemonDetail/${ i + 1 }`)                        
                            } else {
                                
                        }
                        })
                    } else {
                        res.redirect("/");
                    }
                })*/
        } catch (error) {
            res.render("error", { error });
            console.log(error);
        }
    }
}

module.exports = pokemonController;