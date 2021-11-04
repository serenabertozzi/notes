const Notes = require("../lib/notes");

describe(Notes, () => {
  let note = new Notes();
  describe("#create", () => {
    it("creates a new note", () => {
      let testNote = { title: "A note", body: "Some text" };
      note.create(testNote.title, testNote.body);
      expect(note.all).toEqual([testNote]);
    });
  });
});
