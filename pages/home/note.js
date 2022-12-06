const selectNote = () => {};

const newNote = () => {
  const id = Date.now().toString();
  const newNote = {
    id,
    title: 'New note',
    content: '',
    created: id,
    modified: id,
    tags: [],
    favorite: false,
  };

  // adds new note to localstorage
  let notes = JSON.parse(localStorage.getItem('notes'));
  if (notes) notes.unshift(newNote);
  else notes = [newNote];

  localStorage.setItem('notes', JSON.stringify(notes));
  generateNoteList();
};

const generateNoteList = (notes = undefined) => {
  if (!notes) notes = JSON.parse(localStorage.getItem('notes'));

  const notesList = document.querySelector('.menu-notes');
  notesList.innerHTML = '';

  if (notes) {
    notes.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.innerHTML = `
      <div class="menu-notes-note">
        <div class="note-content">
          <h2 class="note__title">${note.title}</h2>
          <p class="note__preview">${
            note.content ? note.content : 'Empty note'
          }</p>
        </div>
        <div class="note-tags">
          <button class="note-tags__tag">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button class="note-tags__tag">#hej</button>
          <button class="note-tags__tag">#vafan</button>
          <button class="note-tags__tag">#bruh</button>
        </div>
      </div> 
      `;

      notesList.appendChild(noteDiv);
    });
  }
};

generateNoteList();
