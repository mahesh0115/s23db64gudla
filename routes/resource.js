var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dumbell_controller = require('../controllers/dumbells');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/dumbells', dumbell_controller.dumbell_create_post);
// DELETE request to delete Costume.
router.delete('/dumbells/:id', dumbell_controller.dumbell_delete);
// PUT request to update Costume.
router.put('/dumbells/:id', dumbell_controller.dumbell_update_put);
// GET request for one Costume.
router.get('/dumbells/:id', dumbell_controller.dumbell_detail);
// GET request for list of all Costume items.
router.get('/dumbells', dumbell_controller.dumbell_list);
module.exports = router;