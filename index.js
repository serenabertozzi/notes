const fetchNotes = require("./fetchNotes");

let noteTitle = document.querySelector("#noteTitle");
let noteBody = document.querySelector("#noteBody");
let btnCreate = document.querySelector("btnCreate");
let displayNotes = document.querySelector("#displayNotes");

// btnCreate.addEventListener("click", () => {});

// displayNotes.appendChild(notes);

fetchNotes();
