var Dumbell = require('../models/dumbells');
// List of all Costumes
exports.dumbell_list = function(req, res) {
res.send('NOT IMPLEMENTED: Dumbell list');
};
// for a specific Costume.
exports.dumbell_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Dumbell detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dumbell_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Dumbell create POST');
};
// Handle Costume delete form on DELETE.
exports.dumbell_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Dumbell delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dumbell_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Dumbell update PUT' + req.params.id);
};

// List of all Costumes
exports.dumbell_list = async function(req, res) {
    try{
    theDumbell = await Dumbell.find();
    res.send(theDumbell);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };