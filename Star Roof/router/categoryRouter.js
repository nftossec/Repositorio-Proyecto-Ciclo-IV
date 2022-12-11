import express from "express"
import { createcategory, deletecategory, readcategory, updatecategory } from "../controller/categoryController.js"




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

categoryRouter.patch("/", (req, res) => {
    deletecategory(res)
})


export default categoryRouter
