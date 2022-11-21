const newNote = () => {
  const note = {
    id: Date.now().toString(),
    tags: ['tag1', 'tag2'],
    favorite: false,
  };

  let notes = JSON.parse(localStorage.getItem('notes'));
  if (notes) notes.unshift(note);
  else notes = [note];

  localStorage.setItem('notes', JSON.stringify(notes));

  generateNoteList();
};

const deleteNote = (id) => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const noteIndex = notes.findIndex((note) => note.id === id.toString());
  notes.splice(noteIndex, 1);
  localStorage.setItem('notes', JSON.stringify(notes));

  generateNoteList();
};

const generateNoteList = () => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const notesList = document.querySelector('.notes-list');
  notesList.innerHTML = '';
  if (notes) {
    notes.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.innerHTML = `
        <div class="note">
          <div class="note-header">
            <h1 class="note__title">${note.id}</h1>
            <div class="note-actions">
              <i class="fa-solid fa-pen"></i>
              <i class="fa-solid fa-trash" onclick="deleteNote(${note.id})"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <p class="note__preview">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quo, quas neque asperiores laborum aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div class="note-tags">
            ${generateTags(note.tags)}
          </div>
        </div>`;

      notesList.appendChild(noteDiv);
    });
  }
};

const generateTags = (tags) => {
  let tagDivs = '';
  tags.forEach((tag) => {
    tagDivs += `<div class='notes-tag notes-tag-dark'>#${tag}</div>`;
  });

  return tagDivs;
};

generateNoteList();
