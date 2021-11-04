class Notes {
  constructor() {
    this.all = [];
  }
  create = (title, body) => {
    this.all.push({ title: title, body: body });
  };
}

module.exports = Notes;
