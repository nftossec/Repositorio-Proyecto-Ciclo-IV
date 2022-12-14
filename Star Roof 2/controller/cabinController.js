import cabinModel from "../Model/cabinModel.js" 

//CRUD

export async function createCabin(req, res){

  const cabin = req.body.cabin

  //validation body of userAdmin
let documento;

try {
  documento = await cabinModel.create(cabin)
} catch (error) {
      res.status(400).json(error.message)
      return;
}
  res.status(201).json(documento)
}



export async function readCabin(req, res){
  const nombreCabin = req.params.nombreCabin

 let documento;

 try {
      documento = await cabinModel.findOne({"nombreCabin":nombreCabin})
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documento)
}


export async function readCabin2(req, res){
  
 let documentos;

 try {
      documentos = await cabinModel.find()
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documentos)
}




export async function updateCabin(req, res){
  const nombreCabin = req.params.nombreCabin
  const updates = req.body.updates
  
 let documento;

 try {
      documento = await cabinModel.findOneAndUpdate({"nombreCabin":nombreCabin}, updates)
 } catch (error) {
    res.status(400).json(error.message)
    return;
 }

 res.status(200).json(documento)
}



export async function deleteCabin(req, res){
  const nombreCabin = req.body.nombreCabin

  let documento = null;
 
  try {
       documento = await cabinModel.findOneAndDelete({"nombreCabin":nombreCabin})
  } catch (error) {
     res.status(400).json(error.message)
     return;
   
  }
  res.status(200).json(documento)
}
