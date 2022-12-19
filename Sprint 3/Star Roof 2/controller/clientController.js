import clientModel from "../Model/clientModel.js"
import bcrypt from "bcrypt"

//CRUD

//CREAR
export async function createClient(req, res){
    const cliente  = req.body.cliente
       
    const {password} = cliente
    
    const encriptedPassword = await bcrypt.hash(password, 10)
    
    cliente.password = encriptedPassword

    if (cliente == null){
        res.status(200).json({
            "error": "Falta el objeto cliente en el cuerpo de la petición."
        })
        return
    }

    let documento
    try {
        documento = await clientModel.create(cliente)
        
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(201).json({"message": "Bienvenido a Star Roof"})
    
}

//LEER
export async function readClient(req, res){
    const id = req.params.id
    let documento
    try {
        documento = await clientModel.findOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)    
}


export async function readClient2(req, res){
  
    let documentos;
   
    try {
         documentos = await clientModel.find()
    } catch (error) {
       res.status(400).json(error.message)
       return;
     
    }
    res.status(200).json(documentos)
   }





//ACTUALIZAR
export async function updateClient(req, res){
    const nombreCliente= req.params.nombreCliente
    const updates = req.body.updates

    let documento
    try {
        documento = await clientModel.updateOne({"nombreCliente":nombreCliente}, updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento)  
}

//ELIMINAR
export async function deleteClient(req, res){
    const nombreCliente = req.body.nombreCliente

    let documento = null
    try {
        documento = await clientModel.findOneAndDelete({"nombreCliente":nombreCliente})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    res.status(200).json(documento) 
}


