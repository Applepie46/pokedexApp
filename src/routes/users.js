let router = require('express').Router();

const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/pokedex', userController.getAllPokemons);
router.get("/pokemonDetail/:name", userController.pokemonDetail);

module.exports = router;
