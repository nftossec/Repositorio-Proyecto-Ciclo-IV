import express from "express"

const cabinsRouter = express.Router()

//CRUD
//CREAR: POST
cabinsRouter.post("/", (req, res) => {
    crea(req, res)
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
