import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import cabinRouter from "./router/cabinRouter.js";
import categoryRouter from "./router/categoryRouter.js";
import clientRouter from "./router/clientRouter.js";
import loginRouter from "./router/loginRouter.js";

//import registerRouter from "./router/registerRouter.js";
import reservationRouter from "./router/reservationRouter.js";
import userAdminRouter from "./router/userAdminRouter.js";

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("El servidor se esta ejecuntado correctamente ");
});

mongoose.connect(
  "mongodb+srv://clientes:leonardo22034@clusterclientes.rk2pe43.mongodb.net/database-cliente?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("conectado a la base de datos.");
    }
  }
);

app.use(cors({
    origin: "http://localhost:3000",
  }));
app.use(express.json());
app.use("/category", categoryRouter);
app.use("/client", clientRouter);
app.use("/userAdmin", userAdminRouter);
app.use("/cabin", cabinRouter);
app.use("/reservation", reservationRouter);
app.use("/login", loginRouter);
//app.use("/register", registerRouter);
