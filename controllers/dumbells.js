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

    // VIEWS
// Handle a show all view
exports.dumbell_view_all_Page = async function(req, res) {
    try{
        theDumbell = await Dumbell.find();
    res.render('dumbells', { title: 'Dumbells Search Results', results: theDumbell });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.dumbell_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dumbell();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.dumbell_name = req.body.dumbell_name;
    document.weight = req.body.weight;
    document.material = req.body.material;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };