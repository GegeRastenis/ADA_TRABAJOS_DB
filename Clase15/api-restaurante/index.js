const express = require("express"); 

const connectDB = require("./database"); 

const dotenv = require("dotenv"); 

dotenv.config(); 

connectDB(); 

const app = express(); 
const PORT = 5000; 

app.use(express.json()); 

app.use("/api/clientes", require("./routes/clientes")); 
app.use("/api/platos", require("./routes/platos")); 
app.use("/api/pedidos", require("./routes/pedidos"));

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
}); 

