

// Crea una función para modificar una reservación en la base de datos
function modifyReservation(reservationId, updatedReservation) {
  // Valida que la reservación exista llamando a la función createReservation()
  return createReservation(reservationId)
    .then((result) => {
      // Si la reservación existe, se actualiza con el método updateOne()
      return db.collection('reservas').updateOne(
        { _id: reservationId }, // Criterio de actualización
        {
          $set: { // Operador $set para establecer valores de campo
            name: updatedReservation.name,
            date: updatedReservation.date
          }
        }
      );
    });
}


 // Usa la función modifyReservation() para modificar una reservación existente (abc123 representar el id de la peticion)

modifyReservation('abc123', { name: 'Jane Doe', date: 'December 15, 2022' })
try {
}  
catch (error) {
  res.status(400).json(error.message);
  return;
}
res.status(200).json(documento);




