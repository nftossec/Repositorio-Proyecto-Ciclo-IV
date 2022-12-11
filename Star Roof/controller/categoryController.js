import categoryModel from "../Model/categoryModel.js"

//CRUD
//crear
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

// leer

export async function readcategory(req, res) {
  let documentos;

  try {
    documentos = await categoryModel.find();
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }
  res.status(200).json(documentos);
}

//ACTUALIZAR

export async function updatecategory(req, res) {
  const nombre = req.params.nombre;
  const updates = req.body.updates;

  let documento;

  try {
    documento = await categoryModel.findOneAndUpdate(
      { nombre: nombre },
      updates
    );
  } catch (error) {
    res.status(400).json(error.message);
    return;
  }

  res.status(200).json(documento);
}

//BORRAR

  //IMPLEMENTACION AQUI
  export async function deletecategory(req, res) {
    const nombre = req.body.nombre;
  
    let documento = null;
  
    try {
      documento = await categoryModel.findOneAndDelete({ nombre: nombre });
    } catch (error) {
      res.status(400).json(error.message);
      return;
    }
    res.status(200).json(documento);
  }



