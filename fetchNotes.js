const fetchNotes = () => {
  fetch("http://localhost:3000/notes")
    .then((response) => response.json())
    .then((notesJson) => console.log(notesJson));
};

module.exports = fetchNotes;
