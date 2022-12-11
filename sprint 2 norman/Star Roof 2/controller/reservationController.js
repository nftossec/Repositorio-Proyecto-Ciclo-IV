import reservationModel from "../Model/reservationModel.js" 

//CRUD

export async function createReservation(req, res){

  const reservation = req.body.reservation

  //validation body of userAdmin
let documento;

try {
  documento = await reservationModel.create(reservation)
} catch (error) {
      res.status(400).json(error.message)
      return;
}
  res.status(201).json(documento)
}



export async function readReservation(req, res){
  const nombreCliente = req.params.nombreCliente

 let documento;

 try {
      documento = await reservationModel.findOne({"nombreCliente":nombreCliente})
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documento)
}


export async function readReservation2(req, res){
  
 let documentos;

 try {
      documentos = await reservationModel.find()
 } catch (error) {
    res.status(400).json(error.message)
    return;
  
 }
 res.status(200).json(documentos)
}




export async function updateReservation(req, res){
  const nombreCliente = req.params.nombreCliente
  const updates = req.body.updates
  
 let documento;

 try {
      documento = await reservationModel.findOneAndUpdate({"nombreCliente":nombreCliente}, updates)
 } catch (error) {
    res.status(400).json(error.message)
    return;
 }

 res.status(200).json(documento)
}



export async function deleteReservation(req, res){
  const nombreCliente = req.body.nombreCliente

  let documento = null;
 
  try {
       documento = await reservationModel.findOneAndDelete({"nombreCliente":nombreCliente})
  } catch (error) {
     res.status(400).json(error.message)
     return;
   
  }
  res.status(200).json(documento)
}
