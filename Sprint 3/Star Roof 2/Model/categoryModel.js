import mongoose from "mongoose";


const typesCategory = ["PREMIUN", "NORMAL", "BASICA"];

const categoryModel = mongoose.Schema({
  "nombreCategory":{type:String, required:true, enum:typesCategory},
  "descripcion":{type:String, required:true, maxLength:150},
})

export default mongoose.model("categories",categoryModel)

