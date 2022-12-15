import mongoose from "mongoose"

const typesCategory = ["PREMIUN", "NORMAL", "BASICA"];

const cabinModel = mongoose.Schema({
    "nombreCabin":{type:String, required:true, maxLength:10, unique:true},
    "categoria":{type:String, required:true, enum: typesCategory},
    "descripcion":{type:String, required:true, maxLength:150},
    
})

export default mongoose.model("cabañas", cabinModel)