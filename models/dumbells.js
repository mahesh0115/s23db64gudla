const mongoose = require("mongoose")
const dumbellSchema = mongoose.Schema({
    dumbell_name: String,
    weight: Number,
    material: String
})
module.exports = mongoose.model("Dumbell",
dumbellSchema)