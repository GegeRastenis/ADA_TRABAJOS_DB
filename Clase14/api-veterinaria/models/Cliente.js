const mongoose = require("mongoose"); 

const ClienteSchema = new mongoose.Schema({
    nombre: {type: String, required :true}, 
    telefono: {type: Number, required: true}, 
    direccion: {type: String}
}); 

module.exports = mongoose.model("Cliente", ClienteSchema); 
