const { response } = require("express");

const fetchNotes = (note) => {
  fetch(notes.display())
    .then((response) => response.json())
    .then((notesJson) => console.log(notesJson));
};

module.exports = fetchNotes;
