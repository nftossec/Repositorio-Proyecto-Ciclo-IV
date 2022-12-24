import cors from "cors";
import dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";
import cabinRouter from "./router/cabinRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import clientRouter from "./router/clientRouter.js";
import loginRouter from "./router/loginRouter.js";

//import registerRouter from "./router/registerRouter.js";
import reservationRouter from "./router/reservationRouter.js";
import userAdminRouter from "./router/userAdminRouter.js";


dotenv.config();
dotenv.config({depuration:true})

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
 console.log("El servidor se esta ejecuntado correctamente");
 
});
const uri = process.env.MONGO_URI;

mongoose.set("strictQuery", true);
// @ts-ignore
mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database is now connected");
  }
});

app.use(
  cors({
    origin: process.env.APP_URL,
  })
);
app.use(express.json());
app.use("/category", categoryRouter);
app.use("/client", clientRouter);
app.use("/userAdmin", userAdminRouter);
app.use("/cabin", cabinRouter);
app.use("/reservation", reservationRouter);
app.use("/login", loginRouter);
