var express = require('express');
const dumbell_controlers= require('../controllers/dumbells');
var router = express.Router();
/* GET costumes */
router.get('/', dumbell_controlers.dumbell_view_all_Page );
module.exports = router;