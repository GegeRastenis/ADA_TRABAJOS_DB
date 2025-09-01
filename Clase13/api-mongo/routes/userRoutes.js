const express = require ("express"); 
const User = require("../models/User"); 

const router = express.Router(); 

router.post("/", async (req, res)=>{
    try{
        const user = new User(req.body); 

        await user.save(); 

        res.status(201).json(user)
    } catch(error){
        res.status(400).json({mensaje: "Error al crear el usuario", error}); 
    }
}); 

router.get("/", async (req, res)=>{
    const users = await User.find(); 

    res.json(users); 
})

module.exports = router; 