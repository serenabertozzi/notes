(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchNotes.js
  var require_fetchNotes = __commonJS({
    "fetchNotes.js"(exports, module) {
      var fetchNotes2 = () => {
        fetch("http://localhost:3000/notes").then((response) => response.json()).then((notesJson) => console.log(notesJson));
      };
      module.exports = fetchNotes2;
    }
  });

  // index.js
  var fetchNotes = require_fetchNotes();
  var noteTitle = document.querySelector("#noteTitle");
  var noteBody = document.querySelector("#noteBody");
  var btnCreate = document.querySelector("btnCreate");
  var displayNotes = document.querySelector("#displayNotes");
  fetchNotes();
})();
