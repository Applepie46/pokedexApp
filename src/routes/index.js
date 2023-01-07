let express = require('express');
let router = express.Router();

let indexController = require("../controllers/indexController");

router.get('/hola', indexController.renderIndex);

module.exports = router;
