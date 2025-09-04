const express = require("express"); 

const router = express.Router(); 

const Plato = require("../models/Platos"); 

router.post("/", async (req, res)=>{
    const nuevoPlato = new Plato(req.body);  
    await nuevoPlato.save(); 
    res.json(nuevoPlato); 
}); 

router.get("/", async (req, res)=>{
    const platos = await Plato.find(); 
    res.json(platos); 
}); 

router.put("/:id", async (req, res)=>{
    const plato = await Plato.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.json(plato); 
}); 

router.delete("/:id", async (req, res)=>{
    await Plato.findByIdAndDelete(req.params.id); 
    res.json({mensaje: "Plato eliminado"}); 
}); 

module.exports = router; 
