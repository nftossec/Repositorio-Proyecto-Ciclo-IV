import userAdminModel from "../Model/userAdminModel.js"

//CRUD

export async function createUserAdmin(req, res){

  const userAdmin = req.body.userAdmin

  //validation body of userAdmin
let documento;

try {
  documento = await userAdminModel.create(userAdmin)
} catch (error) {
      res.status(400).json(error.message)
      return;
}
  res.status(201).json(documento)
}



export async function readUserAdmin(req, res){
  const correo = req.params.correo

 let documento;

 try {
      documento = await userAdminModel.findOne({"correo":correo})
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documento)
}


export async function readUserAdmin2(req, res){
  
 let documentos;

 try {
      documentos = await userAdminModel.find()
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documentos)
}




export async function updateUserAdmin(req, res){
  const correo = req.params.correo
  const updates = req.body.updates
  
 let documento;

 try {
      documento = await userAdminModel.findOneAndUpdate({"correo":correo}, updates)
 } catch (error) {
    res.status(400).json(error.message)
    return;
 }

 res.status(200).json(documento)
}



export async function deleteUserAdmin(req, res){
  const correo = req.body.correo

  let documento = null;
 
  try {
       documento = await userAdminModel.findOneAndDelete({"correo":correo})
  } catch (error) {
     res.status(400).json(error.message)
     return;
   
  }
  res.status(200).json(documento)
}
