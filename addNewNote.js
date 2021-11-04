const addNewNote = (title, body, fetchNotes) => {
  fetch('http://localhost:3000/notes', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({"title": title, "body": body})
  })
    .then(fetchNotes)
  // .then((response) => {
  //   response.json()
  // })
  // .then((data) => {
  //   console.log(data)
  // })
}

module.exports = addNewNote;