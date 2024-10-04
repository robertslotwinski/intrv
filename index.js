const express = require("express");
const app = express();

const PORT = 2137;
const HOST = "localhost";

const patients = require("./patients");

app.get("/patients", (req, res) => {
  res.json(patients);
});

app.listen(PORT, () => {
  console.log(`Dziala na http://${HOST}:${PORT}/patients`);
});
