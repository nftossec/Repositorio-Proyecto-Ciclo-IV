import mongoose from "mongoose"


const typesCategory = ["PREMIUN", "NORMAL", "BASICA"];
const dispReservation = ["CREADA", "MODIFICADA", "CANCELADA"];

//validar fecha===>ajustar codigo
function validarFecha(){
    let fechaInicio=Date;
    let fechaFinal=Date;

    let Anyo1 = fechaInicio.getFullYear();
    let Mes1 = fechaInicio.getMonth();
    let Dia1 = fechaInicio.getDate();
    
    let Anyo2 = fechaFinal.getFullYear();
    let Mes2 = fechaFinal.getMonth();
    let Dia2 = fechaFinal.getDate();
    
    if (Anyo1 < Anyo2){
        alert ("La fecha introducida es anterior a Hoy");
    }
    else{
        if (Anyo1 == Anyo2 && Mes1 < Mes2){
            alert ("La fecha introducida es anterior a Hoy");			
        }
        else{
            if (Anyo1 == Anyo2 && Mes1 == Mes2 && Dia1 < Dia2){
                alert ("La fecha introducida es anterior a Hoy");
            }
            else{
                if (Anyo1 == Anyo2 && Mes1 == Mes2 && Dia1 == Dia2){
                    alert ("Has introducido la fecha de Hoy");
                }
                else{
                    alert ("La fecha introducida es posterior a Hoy");
                }
            }
        }
    }
}

const reservationModel = mongoose.Schema({
    "nombreCliente":{type:String, required:true, maxLength:50, unique:true},
    "fechaInicio":{type:Date, required:true}, //validate:{validator:validarFecha, message:"la fecha inicial debe ser menor que la fecha final"}}, //verificar fx para que valide
    "fechaFinal":{type:Date, required:true},
    "disponibilidad":{type:String, required:true, enum:dispReservation},
    "categoria":{type:String, required:true, enum:typesCategory}
})

export default mongoose.model("reservas", reservationModel)