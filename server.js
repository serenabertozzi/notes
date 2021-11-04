const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const Notes = require("./lib/notes");

const notes = new Notes();

app.use(express.json());
app.use(express.static("./"));
app.use(cors());

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/notes", (req, res) => {
  res.send(notes.display());
});

app.post("/notes", (req, res) => {
  notes.create(req.body.title, req.body.body)
  res.json(req.body)
});

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);
