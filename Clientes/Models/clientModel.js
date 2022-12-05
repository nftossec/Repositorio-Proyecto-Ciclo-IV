import monggose from "mongoose"

const clientModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "identificacion":{type:String, required:true},
    "correo":{type:String, required:true},
    "edad":{type:Number, required:true}
})

export default mongoose.model("clientes", clientModel)
