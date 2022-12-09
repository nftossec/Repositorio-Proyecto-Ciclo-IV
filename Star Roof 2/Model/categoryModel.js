import mongose from "mongoose";

const categoryModel = mongose.Schema({
  "nombre":String,
  "descripcion": String
})




export default mongose.model("category",categoryModel)