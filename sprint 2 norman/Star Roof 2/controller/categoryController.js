import categoryModel from "../Model/categoryModel.js"


export async function createCategory(req, res){

  const category = req.body.category

  //validation body of userAdmin
let documento;

try {
  documento = await categoryModel.create(category)
} catch (error) {
      res.status(400).json(error.message)
      return;
}
  res.status(201).json(documento)
}



export async function readCategory(req, res){
  const nombreCategory = req.params.nombreCategory

 let documento;

 try {
      documento = await categoryModel.findOne({"nombreCategory":nombreCategory})
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documento)
}


export async function readCategory2(req, res){
  
 let documentos;

 try {
      documentos = await categoryModel.find()
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documentos)
}




export async function updateCategory(req, res){
  const nombreCategory = req.params.nombreCategory
  const updates = req.body.updates
  
 let documento;

 try {
      documento = await categoryModel.findOneAndUpdate({"nombreCategory":nombreCategory}, updates)
 } catch (error) {
    res.status(400).json(error.message)
    return;
 }

 res.status(200).json(documento)
}



export async function deleteCategory(req, res){
  const nombreCategory = req.body.nombreCategory

  let documento = null;
 
  try {
       documento = await categoryModel.findOneAndDelete({"nombreCategory":nombreCategory})
  } catch (error) {
     res.status(400).json(error.message)
     return;
   
  }
  res.status(200).json(documento)
}