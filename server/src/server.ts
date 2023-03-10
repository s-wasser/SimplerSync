import express from "express";
import {
  handleCreate,
  handleUpdate,
  handleDelete,
  handleRunner
} from "./engine/handlers";

const app = express();

app.post("/sync", (req, res) => {
  const { name, description } = req.body;
  const result = handleCreate({ name, description });
  res.send(result);
});

app.patch("/sync", (req, res) => {
  const { id, name, description, schedule, job } = req.body;
  const result = handleUpdate({ id, name, description, schedule, job });
  res.send(result);
});

app.delete("/sync", (req, res) => {
  const { id } = req.body;
  const result = handleDelete({ id });
  res.send(result);
});

app.get("/runner", (req, res) => {
  const { id } = req.query;
  if (typeof id === "string") handleRunner({ id });
  res.send();
});

export default app;
