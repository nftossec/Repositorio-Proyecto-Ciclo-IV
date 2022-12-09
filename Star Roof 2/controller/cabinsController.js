import cabinsModel from "../Model/cabinsModel.js"

//CRUD
export async function createcabins(req, res){
  //IMPLEMENTACION AQUI
  const {nombre,descripcion} = req.body.usuario

  cabinsModel.create({
   "nombre": nombre,
   "descripcion": descripcion

  })

  const usuario = await cabinsModel.create({
      nombre,
      descripcion,
      
  })

  res.status(201).json(usuario)
}

export function createCabin(req, res){
  res.send("La cabaña ha sido creada")
}

export function readCabin(req, res){
  res.sendStatus(200)
}

export function updateCabin(req, res){
  res.send("La cabaña ha sido actualizada")
}

export function deleteCabin(req, res){
  res.send("La cabaña ha sido eliminada")
}

