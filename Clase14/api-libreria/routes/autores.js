const express = require("express"); 
const router = express.Router(); 

const Autor = require("../models/Autor"); 

router.post("/", async(req, res)=>{
    const nuevoAutor = new Autor(req.body); 
    await nuevoAutor.save(); 
    res.json(nuevoAutor); 
});

router.get("/", async(req, res)=>{
    const autores = await Autor.find(); 
    res.json(autores)
}); 

router.put("/:id", async (req, res)=>{
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.json(autor); 
}); 

router.delete("/:id", async (req, res)=>{
    await Autor.findByIdAndDelete(req.params.id); 
    res.json({mensaje: "Autor eliminado"}); 
}); 

module.exports = router; 