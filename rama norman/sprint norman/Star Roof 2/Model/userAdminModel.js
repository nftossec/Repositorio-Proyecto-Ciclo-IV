import mongoose from "mongoose"

const userAdminModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "correo":{type:String, required:true},
    "contrasena":{type:String, required:true}
})

export default mongoose.model("administrators", userAdminModel)
