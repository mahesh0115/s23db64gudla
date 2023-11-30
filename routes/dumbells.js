var express = require('express');
const dumbell_controlers= require('../controllers/dumbells');
const passport = require('passport');
var router = express.Router();
/* GET costumes */
router.get('/', dumbell_controlers.dumbell_view_all_Page );
module.exports = router;

// GET request for one costume.
router.get('/dumbells/:id', dumbell_controlers.dumbell_detail);
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET detail costume page */
router.get('/detail', dumbell_controlers.dumbell_view_one_Page);
/* GET create costume page */
router.get('/create',secured, dumbell_controlers.dumbell_create_Page);
/* GET create update page */
router.get('/update',secured, dumbell_controlers.dumbell_update_Page);
/* GET delete costume page */
router.get('/delete',secured, dumbell_controlers.dumbell_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });



