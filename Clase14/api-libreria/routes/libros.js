const express = require("express");
const router = express.Router(); 

const Libro = require("../models/Libro"); 

router.post("/", async(req, res)=>{
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save(); 
    res.json(nuevoLibro); 
}); 

router.get("/", async(req, res)=>{
    const libros = await Libro.find().populate("autor");
    res.json(libros); 
}); 

router.put("/:id", async(req, res)=>{
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.json(libro); 
}); 

router.delete("/:id", async(req, res)=>{
    await Libro.findByIdAndDelete(req.params.id); 
    res.json({mensaje: "Libro Eliminado"}); 
}); 

module.exports = router; 
