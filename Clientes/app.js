import express from "express"
import mongoose from "mongoose";
import clientRouter from "./routes/clientRouter.js";
import testRouter from "./routes/testRouter.js";

const app = express();
const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando correctamente.");
})

mongoose.connect("mongodb+srv://clientes:leonardo22034@clusterclientes.rk2pe43.mongodb.net/database-cliente?retryWrites=true&w=majority", (err) =>{
    if (err){
        console.log(err);
    }else{
        console.log("La base de datos se encuentra conectada.");
    }
    
})

app.use(express.json())

app.use("/client", clientRouter)
app.use("/test", testRouter)