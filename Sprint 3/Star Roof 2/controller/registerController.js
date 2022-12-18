import clientModel from "../Model/clientModel.js";

export async function register(req, res) {
  try {
    //DB: clientes

    const { name, mail, ID, age, password } = req.headers;

    const document = await clientModel.findOne({ nombreCliente: name });
    const documentId = await clientModel.findOne({ identificacion: ID });
    const documentMail = await clientModel.findOne({ correo: mail });
    const documentAge = await clientModel.findOne({ edad: age });
    const documentPassword = await client.findOne({ password: password });

   

    res.status(200).json({ message: "Bienvenido a Star Roof" });
  } catch (error) {
    res.status(400).json(error.message);
  }
}
