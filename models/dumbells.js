const mongoose = require("mongoose")
const dumbellSchema = mongoose.Schema({
    dumbell_name:{ type: String,
        minlength: 0,
        maxlength: 15,
    },
    weight: { type: Number,
        min: 10,
        max: 150,
    },
    material: String
})
module.exports = mongoose.model("Dumbell",
dumbellSchema)