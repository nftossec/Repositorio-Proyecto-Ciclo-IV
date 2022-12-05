import mongoose from "mongoose";

const categoryModel = mongoose.Schema({
  "nombre":String,
  "descripcion": String
})




export default mongoose.model("categories",categoryModel)

