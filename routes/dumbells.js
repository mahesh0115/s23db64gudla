var express = require('express');
const dumbell_controlers= require('../controllers/dumbells');
var router = express.Router();
/* GET costumes */
router.get('/', dumbell_controlers.dumbell_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/dumbells/:id', dumbell_controlers.dumbell_detail);
/* GET detail costume page */
router.get('/detail', costume_controlers.costume_view_one_Page);

