const Notes = require("../lib/notes");

describe(Notes, () => {
  let notes = new Notes();
  let testNote = { title: "A note", body: "Some text" };

  describe("#create", () => {
    it("creates a new note", () => {
      notes.create(testNote.title, testNote.body);
      expect(notes.all).toEqual([testNote]);
    });
  });

  describe("#display", () => {
    it("displays all notes", () => {
      expect(notes.display()).toEqual([
        testNote
      ]);
    });
  });
});
