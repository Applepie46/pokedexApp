let express = require('express');
let router = express.Router();

let indexController = require("../controllers/indexController");

router.get('/', indexController.renderIndex);

module.exports = router;
