const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/notes", (req, res) => {});

app.post("/notes", (req, res) => {});

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);
