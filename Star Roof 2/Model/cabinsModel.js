import mongoose from "mongoose";

const cabinsModel = mongoose.Schema({
  "nombre":String,
  "descripcion": String
})




export default mongoose.model("cabañas",cabinsModel)