var express = require('express');
var router = express.Router();
const {getAll} = require('../App/Controllers/ApiController')
/* GET users listing. */
router.get('/getAll', getAll);

module.exports = router;
