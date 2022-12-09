import express from "express";
import {
  createClient,
  deleteClient,
  readClient,
  updateClient,
} from "../controller/clientController.js";

const clientRouter = express.Router();

clientRouter.post("/", (req, res) => {
  createClient(req, res);
});

clientRouter.get("/:id", (req, res) => {
  readClient(req, res);
});

clientRouter.patch("/:id", (req, res) => {
  updateClient(req, res);
});

clientRouter.delete("/", (req, res) => {
  deleteClient(req, res);
});

export default clientRouter;
