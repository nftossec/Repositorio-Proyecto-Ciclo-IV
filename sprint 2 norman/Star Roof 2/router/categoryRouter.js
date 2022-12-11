import express from "express"
import { createCategory, deleteCategory, readCategory, readCategory2, updateCategory } from "../controller/categoryController.js"
  

const categoryRouter = express.Router();

categoryRouter.post("/", (req, res) =>{
    createCategory(req, res)
})

categoryRouter.get("/:nombreCategory", (req, res) =>{
    readCategory(req, res)
})

categoryRouter.get("/", (req, res) =>{
    readCategory2(req, res)
})



categoryRouter.patch("/:nombreCategory", (req, res) =>{
    updateCategory(req, res)
})



categoryRouter.delete("/", (req, res) =>{
    deleteCategory(req, res)
})

export default categoryRouter