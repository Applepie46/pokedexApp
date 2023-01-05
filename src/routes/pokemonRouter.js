let router = require('express').Router();

const pokemonController = require("../controllers/pokemonController");

/* GET users listing. */
router.get('/', pokemonController.getAllPokemons);
router.get("/pokemonDetail/:id", pokemonController.pokemonDetail);

/* POST users listing. */
router.post("/searchPokemons", pokemonController.searchPokemons);

module.exports = router;
