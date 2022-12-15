import mongoose from "mongoose";

const clientModel = mongoose.Schema({

    "nombreCliente": { type: String, required: true, maxLength: 50, unique: true },
    "identificacion": { type: String, required: true, unique: true },
    "password": { type: String, required: true },
    "correo": { type: String, required: true, maxLength: 50, unique: true },
    "edad": { type: Number, required: true, min: 18 },
});

export default mongoose.model("clientes", clientModel);

