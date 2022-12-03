import categoryModel from "../Model/categoryModel.js"

//CRUD
export async function createcategory(req, res){
  //IMPLEMENTACION AQUI
  const {nombre,descripcion} = req.body.usuario

  categoryModel.create({
   "nombre": nombre,
   "descripcion": descripcion

  })

  const usuario = await categoryModel.create({
      nombre,
      descripcion,
      
  })

  res.status(201).json(usuario)
}

export function readcategory(res){
  //IMPLEMENTACION AQUI
  res.sendStatus(200)
}

export function updatecategory(res){
  //IMPLEMENTACION AQUI
  res.sendStatus(200)
}
