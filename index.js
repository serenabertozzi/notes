const fetchNotes = require("./fetchNotes");
const addNewNote = require('./addNewNote')

let noteTitle = document.querySelector("#noteTitle");
let noteBody = document.querySelector("#noteBody");
let btnCreate = document.querySelector("#btnCreate");
let displayNotes = document.querySelector("#displayNotes");

btnCreate.addEventListener("click", () => {
  addNewNote(noteTitle.value, noteBody.value, fetchNotes);
});

// displayNotes.appendChild(notes);

fetchNotes();
