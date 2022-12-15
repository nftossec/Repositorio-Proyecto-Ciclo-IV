import mongoose from "mongoose"

const userAdminModel = mongoose.Schema({
    "nombreUserAdmin":{type:String, required:true, maxLength:50, unique: true},
    "correo":{type:String, required:true, maxLength:50, unique:true},
    "contrasena":{type:String, required:true, unique:true}
})

export default mongoose.model("administrators", userAdminModel)
