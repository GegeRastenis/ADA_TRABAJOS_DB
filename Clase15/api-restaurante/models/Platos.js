const mongoose = require("mongoose"); 

const PlatoSchema = new mongoose.Schema({
    plato: {type: String, required: true}, 
    tipo: {type: String, required: true}, 
    precio: {type: Number, required: true}
}); 

module.exports = mongoose.model("Plato", PlatoSchema); 