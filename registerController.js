import bcrypt from "bcrypt";
import clientModel from "../Model/clientModel.js";

export default async function register(req, res) {
  
    try {

    const { name, mail, ID, age, password } = req.headers;

    const document = await clientModel.findOne({ "nombreCliente": name });
    const documentId = await clientModel.findOne({ "identificacion": ID });  
    const documentMail = await clientModel.findOne({ "correo": mail });
    const documentAge = await clientModel.findOne({ "edad": age }); 
    const documentPassword = await client.findOne({"password": password})

    // if (document != null) {
    //     const documentPassword = document.password;
    //     const access = await bcrypt.compare(password, documentPassword)

    //     if (access) {
            res.json({"message": "Bienvenido"})
        } catch (error) {
    res.status(401).json(error.message);
  }
}