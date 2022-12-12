import express from "express"
import {createReservation, readReservation, readReservation2, updateReservation, deleteReservation } from "../controller/reservationController.js"
  

const reservationRouter = express.Router();

reservationRouter.post("/", (req, res) =>{
    createReservation(req, res)
})

reservationRouter.get("/:nombreCliente", (req, res) =>{
    readReservation(req, res)
})

reservationRouter.get("/", (req, res) =>{
    readReservation2(req, res)
})



reservationRouter.patch("/:nombreCliente", (req, res) =>{
    updateReservation(req, res)
})



reservationRouter.delete("/", (req, res) =>{
    deleteReservation(req, res)
})

export default reservationRouter