const express = require("express"); 

const router = express.Router(); 

const Pedido = require("../models/Pedidos"); 
const Platos = require("../models/Platos");

router.post("/", async (req, res)=>{
    try{
        const {clienteId, platos} = req.body; 
        const platosInfo = await Platos.find({ _id: { $in: platos } }); 

        const total = platosInfo.reduce((acc, plato)=> acc + plato.precio, 0); 

        const nuevoPedido = new Pedido({
            clienteId, 
            platos, 
            total, 
        }); 
    await nuevoPedido.save(); 

    res.json(nuevoPedido); 
    }catch (error){
        console.error("Error al crear el pedido", error);
        res.status(500).json({message: "Error al crear el pedido", error})
        
    }
}); 

router.get("/", async (req, res)=>{
    const pedidos = await Pedido.find()
    .populate("clienteId") 
    .populate("platos"); 

    res.json(pedidos); 
}); 

router.put("/:id", async (req, res)=>{
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.json(pedido); 
}); 

router.delete("/:id", async (req, res)=>{
    await Pedido.findByIdAndDelete(req.params.id); 
    res.json({mensaje: "Pedido eliminado"}); 
}); 

module.exports = router; 
