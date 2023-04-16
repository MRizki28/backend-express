var express = require('express');
var router = express.Router();
const {createData} = require('../App/Controllers/ApiController');

router.post('/cms/mahasiswa' , createData);

module.exports = router;