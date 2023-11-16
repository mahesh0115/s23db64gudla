const dumbells = require('../models/dumbells');
var Dumbell = require('../models/dumbells');
// List of all Costumes
exports.dumbell_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Dumbell list');
};
// for a specific Costume.
exports.dumbell_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dumbells.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST.
exports.dumbell_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Dumbell create POST');
};
//Handle Costume update form on PUT.
exports.dumbell_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dumbells.findById(req.params.id)
        // Do updates of properties
        if (req.body.dumbell_name)
            toUpdate.dumbell_name = req.body.dumbell_name;
        if (req.body.weight) toUpdate.weight = req.body.weight;
        if (req.body.material) toUpdate.material = req.body.material;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// List of all Costumes
exports.dumbell_list = async function (req, res) {
    try {
        theDumbell = await Dumbell.find();
        res.send(theDumbell);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.dumbell_view_all_Page = async function (req, res) {
    try {
        theDumbell = await Dumbell.find();
        res.render('dumbells', { title: 'Dumbells Search Results', results: theDumbell });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.dumbell_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Dumbell();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.dumbell_name = req.body.dumbell_name;
    document.weight = req.body.weight;
    document.material = req.body.material;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle dumbell delete on DELETE.
exports.dumbell_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Dumbell.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.dumbell_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Dumbell.findById(req.query.id)
        res.render('dumbelldetail',
            { title: 'Dumbell Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dumbell_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('dumbellcreate', { title: 'Dumbell Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.dumbell_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Dumbell.findById(req.query.id)
        res.render('dumbellupdate', { title: 'Dumbell Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.dumbell_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Dumbell.findById(req.query.id)
        res.render('dumbelldelete', {
            title: ' Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};