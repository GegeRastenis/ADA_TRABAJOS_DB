const express = require("express"); 
const connectDB = require("./database"); 
const dotenv = require("dotenv"); 

const app = express(); 

dotenv.config(); 

const PORT = process.env.PORT || 5000; 
connectDB(); 


app.use(express.json()); 

app.use("/api/libros", require("./routes/libros"));

app.use("/api/autores", require("./routes/autores")); 

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
});

