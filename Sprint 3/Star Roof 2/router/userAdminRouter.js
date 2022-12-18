import express from "express"
import { createUserAdmin, readUserAdmin, updateUserAdmin, deleteUserAdmin, readUserAdmin2} from "../controller/userAdminController.js"
  

const userAdminRouter = express.Router()

userAdminRouter.post("/", (req, res) =>{
    createUserAdmin(req, res)
})

userAdminRouter.get("/:correo", (req, res) =>{
    readUserAdmin(req, res)
})

userAdminRouter.get("/", (req, res) =>{
    readUserAdmin2(req, res)
})



userAdminRouter.patch("/:correo", (req, res) =>{
    updateUserAdmin(req, res)
})



userAdminRouter.delete("/", (req, res) =>{
    deleteUserAdmin(req, res)
})

export default userAdminRouter