import bcrypt from "bcrypt";
import clientModel from "../Model/clientModel.js";

export default async function login(req, res) {
  
    try {

    const { user, password } = req.headers;
        
    const document = await clientModel.findOne({ "nombreCliente": user });
          
    if (document != null) {
        const documentPassword = document.password;
        const access = await bcrypt.compare(password, documentPassword);
        
        if (access) {
            res.json({"message": "Bienvenido"});
        }
    }else{
        res.status(401).json(error.message);
    }
    
  } catch (error) {
    res.status(401).json(error.message);
  }
}
