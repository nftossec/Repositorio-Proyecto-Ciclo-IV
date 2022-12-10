import mongoose from "mongoose"

const categoryModel = mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
})




export default mongoose.model("category",categoryModel)