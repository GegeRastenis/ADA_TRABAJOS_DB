const express = require("express"); 

const connectDB = require("./database"); 

const dotenv = require("dotenv"); 

dotenv.config(); 

connectDB(); 

const app = express(); 

const PORT = 5000; 

app.use(express.json()); 

app.use("/api/mascota", require("./routes/mascota")); 
app.use("/api/cliente", require("./routes/cliente")); 

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
}); 
