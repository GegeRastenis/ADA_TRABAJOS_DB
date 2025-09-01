const moongoose = require ("mongoose"); 

require("dotenv").config(); 

const connectDB = async()=>{
    try{
        await moongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }); 

        console.log("Conectado a MongoDB"); 
    } catch (error){ 
        console.error("Error de conexion a MongoDB: ", error);

        process.exit(1); 
        
    }
}

module.exports = connectDB; 