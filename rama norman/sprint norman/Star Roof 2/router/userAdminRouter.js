import express from "express"
import { createUserAdmin, readUserAdmin, updateUserAdmin, deleteUserAdmin} from "../controller/userAdminController.js"
  

const userAdminRouter = express.Router()

userAdminRouter.post("/", (req, res) =>{
    createUserAdmin(req, res)
})

userAdminRouter.get("/", (req, res) =>{
    readUserAdmin(req, res)
})

userAdminRouter.patch("/", (req, res) =>{
    updateUserAdmin(req, res)
})

userAdminRouter.delete("/", (req, res) =>{
    deleteUserAdmin(req, res)
})

export default userAdminRouter