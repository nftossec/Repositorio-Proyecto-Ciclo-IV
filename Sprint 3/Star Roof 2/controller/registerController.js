import clientModel from "../Model/clientModel.js";

export async function register(req, res) {
  try {
    //DB: clientes

    const { nombreCliente, identificacion, correo, edad, password } = req.body;
    
    const document = await clientModel.findOne({ "nombreCliente": nombreCliente});
    const documentId = await clientModel.findOne({ "identificacion": identificacion });
    const documentMail = await clientModel.findOne({ "correo": correo });
    const documentAge = await clientModel.findOne({ "edad": edad });
    const documentPassword = await client.findOne({ "password": password });
    

    res.status(200).json({ message: "Bienvenido a Star Roof" });
  } catch (error) {
    res.status(400).json(error.message);
  }
}
