const mongoose = require("mongoose"); 

const PedidoSchema = new mongoose.Schema({
    clienteId: {type: mongoose.Schema.Types.ObjectId, ref: "Cliente"}, 
    platos: [{type: mongoose.Schema.Types.ObjectId, ref: "Plato"}], 
    total: {type: Number, required: true}
}); 

module.exports = mongoose.model("Pedido", PedidoSchema); 