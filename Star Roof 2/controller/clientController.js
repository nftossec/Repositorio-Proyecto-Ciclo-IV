import clientModel from "../Model/clientModel.js";
//CRUD

//CREAR
export async function createClient(req, res) {
  const cliente = req.body.cliente;
  if (cliente == null) {
    res.status(200).json({
      error: "Falta el objeto cliente en el cuerpo de la petición.",
    });
    return;
  }

  let documento;
  try {
    documento = await clientModel.create(cliente);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(201).json(documento);
}

//LEER
export async function readClient(req, res) {
  const id = req.params.id;
  let documento;
  try {
    documento = await clientModel.findOne({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

//ACTUALIZAR
export async function updateClient(req, res) {
  const id = req.params.id;
  const updates = req.body.updates;

  let documento;
  try {
    documento = await clientModel.updateOne({ _id: id }, updates);
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}

//ELIMINAR
export async function deleteClient(req, res) {
  const id = req.body.id;

  let documento = null;
  try {
    documento = await clientModel.findOneAndDelete({ _id: id });
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documento);
}
