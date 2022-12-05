import express from "express"
import mongoose from "mongoose";
import clientRouter from "./routes/clientRouter.js";

const app = express();
const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando correctamente.");
})


app.use(express.json())
app.use("/client", clientRouter)