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

  // addNewNote.js
  var require_addNewNote = __commonJS({
    "addNewNote.js"(exports, module) {
      var addNewNote2 = (title, body, fetchNotes2) => {
        fetch("http://localhost:3000/notes", {
          method: "post",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ "title": title, "body": body })
        }).then(fetchNotes2);
      };
      module.exports = addNewNote2;
    }
  });

  // index.js
  var fetchNotes = require_fetchNotes();
  var addNewNote = require_addNewNote();
  var noteTitle = document.querySelector("#noteTitle");
  var noteBody = document.querySelector("#noteBody");
  var btnCreate = document.querySelector("#btnCreate");
  var displayNotes = document.querySelector("#displayNotes");
  btnCreate.addEventListener("click", () => {
    addNewNote(noteTitle.value, noteBody.value, fetchNotes);
  });
  fetchNotes();
})();
