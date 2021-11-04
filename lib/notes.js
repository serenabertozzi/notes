class Notes {

  constructor() {
    this.all = [];
  }

  create (title, body) {
    this.all.push({ title: title, body: body });
  };

  display () {
    return this.all;
  }
}

module.exports = Notes;
