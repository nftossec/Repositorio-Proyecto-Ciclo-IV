import express from "express"
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js"

const clientRouter = express.Router()

clientRouter.post("/", (req, res) =>{
    createClient(req, res)
})

clientRouter.get("/", (req, res) =>{
    readClient(req, res)
})

clientRouter.patch("/", (req, res) =>{
    updateClient(req, res)
})

clientRouter.delete("/", (req, res) =>{
    deleteClient(req, res)
})

export default clientRouter