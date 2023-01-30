var express = require('express');
var router = express.Router();
let controller = require ("../controllers/detalleController");

/* GET home page. */
router.get('/:id', controller.menu);


module.exports = router;
