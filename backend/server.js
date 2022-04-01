const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
  res.send(notes); // or res.json as the notes is returning in json format
});

app.get("/api/notes/:id", (req, res) => {
  res.send(notes.filter((note) => note._id === req.params.id));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
