import express from "express"
import {createCabin, readCabin, readCabin2, updateCabin, deleteCabin} from "../controller/cabinController.js"
  

const cabinRouter = express.Router();

cabinRouter.post("/", (req, res) =>{
    createCabin(req, res)
})

cabinRouter.get("/:nombreCabin", (req, res) =>{
    readCabin(req, res)
})

cabinRouter.get("/", (req, res) =>{
    readCabin2(req, res)
})



cabinRouter.patch("/:nombreCabin", (req, res) =>{
    updateCabin(req, res)
})



cabinRouter.delete("/", (req, res) =>{
    deleteCabin(req, res)
})

export default cabinRouter