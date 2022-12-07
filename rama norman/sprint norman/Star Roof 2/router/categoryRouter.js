import express from "express"
import {createcategory, readcategory, updatecategory} from "../controller/category.js"



const categoryRouter = express.Router()

//CRUD
//CREAR: POST
categoryRouter.post("/", (req, res) => {
    createcategory(req, res)
})

//LEER: GET
categoryRouter.get("/", (req, res) => {
    readcategory(res)
})

//ACTUALIZAR: PUT / PATCH
categoryRouter.patch("/", (req, res) => {
    updatecategory(res)
})

export default categoryRouter
