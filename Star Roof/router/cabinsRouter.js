import express from "express"
import { createCabin, readCabin, updateCabin } from "../controller/cabins.js"

const cabinsRouter = express.Router()

//CRUD
//CREAR: POST
cabinsRouter.post("/", (req, res) => {
    createCabin(req, res)
})

//LEER: GET
cabinsRouter.get("/", (req, res) => {
    readCabin(res)
})

//ACTUALIZAR: PUT / PATCH
cabinsRouter.patch("/", (req, res) => {
    updateCabin(res)
})

export default cabinsRouter
