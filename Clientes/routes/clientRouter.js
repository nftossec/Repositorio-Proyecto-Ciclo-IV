import express from "express"
import { createClient, deleteClient, readClient, updateClient } from "../controllers/clientController.js"

const clientRouter = express.Router()

userRouter.post("/", (req, res) =>{
    createClient(req, res)
})

userRouter.get("/", (req, res) =>{
    readClient(req, res)
})

userRouter.patch("/", (req, res) =>{
    updateClient(req, res)
})

user.Router.delete("/", (req, res) =>{
    deleteClient(req, res)
})

export default clientRouter