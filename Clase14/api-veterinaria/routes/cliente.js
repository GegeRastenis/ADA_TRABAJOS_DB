const express = require("express"); 

const router = express.Router(); 

const Cliente = require("../models/Cliente"); 

router.post("/", async (req, res)=>{
    const nuevoCliente = new Cliente(req.body); 
    await nuevoCliente.save(); 
    res.json(nuevoCliente); 
}); 

router.get("/", async (req, res)=>{
    const clientes = await Cliente.find(); 
    res.json(clientes); 
}); 

router.put("/:id", async (req, res)=>{
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.json(cliente); 
}); 

router.delete("/:id", async (req, res)=>{
    await Cliente.findByIdAndDelete(req.params.id); 
    res.json({mensaje: "Cliente eliminado"}); 
}); 

module.exports = router; 

