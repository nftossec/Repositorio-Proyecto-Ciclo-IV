
import reservationModel from "../Model/reservationModel.js";

export default async function reserv(req, res) {
  
    try {

    const { nombreC, fechaI, fechaF, disp, cat} = req.headers;
        
    const document = await reservationModel.findOne({ "nombreCliente": nombreCliente });
    const documentFI = await reservationModel.findOne({ "fechaInicio": fechaInicio });
    const documentFF = await reservationModel.findOne({ "fechaFinal": fechaFinal });
    const documentD = await reservationModel.findOne({ "disponibilidad": disponibilidad });
    const documentC = await reservationModel.findOne({ "categoria": categoria });
          
    res.status(200).json({ message: "Bienvenido a Star Roof" });
    
  } catch (error) {
    res.status(401).json(error.message);
  }
}
