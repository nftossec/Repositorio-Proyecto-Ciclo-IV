import express from "express"
import clientModel from "../Models/clientModel.js"

const testRouter = express.Router()

//Lista de todos los clientes

testRouter.get("/", async (req, res) =>{
    let documentos

    try {
        documentos = await clientModel.find()
    } catch (error) {
        
    }
    res.json(documentos)
    return
})

export default testRouter