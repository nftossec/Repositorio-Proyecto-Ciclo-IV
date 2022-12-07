import userAdminModel from "../Model/userAdminModel.js"

//CRUD
export async function createUserAdmin(req, res){
  //IMPLEMENTACION AQUI
  const {nombre, correo, contrasena} = req.body.userAdmin

  userAdminModel.create({
   "nombre": nombre,
   "correo": correo,
   "contrasena": contrasena

  })

  const userAdmin = await userAdminModel.create({
      nombre,
      correo,
      contrasena
      
  })

  res.status(201).json(userAdmin)
}

export function readUserAdmin(req, res){
  //IMPLEMENTACION AQUI
  res.sendStatus(200)
}

export function updateUserAdmin(req, res){
  //IMPLEMENTACION AQUI
  res.sendStatus(200)
}

export function deleteUserAdmin(req, res){
  //IMPLEMENTACION AQUI
  res.sendStatus(200)
}
