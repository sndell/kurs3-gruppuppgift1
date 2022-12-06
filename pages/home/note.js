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

let currentNote = '';
const selectNote = (id = undefined) => {
  const preview = document.querySelector('.preview');

  if (id && currentNote !== id.toString()) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    const note = notes.find((note) => note.id === id.toString());
    currentNote = id.toString();

    preview.classList.remove('hidden');

    preview.innerHTML = `
    <div class="preview-header">
      <h2 class="preview-header__title">${note.title}</h2>
        <div class="preview-header-actions">
          <i class="fa-solid fa-trash preview-header-actions__action"></i>
          <i class="fa-solid fa-pen preview-header-actions__action"></i>
          <i class="fa-solid fa-print preview-header-actions__action"></i>
          <i class="fa-regular fa-star preview-header-actions__action"></i>
        </div>
      <button class="preview-header__close" onclick="selectNote()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
    console.log(note);
    console.log(id);
  } else {
    currentNote = '';
    preview.innerHTML = '';
    preview.classList.add('hidden');
  }
};

const generateNoteList = (notes = undefined) => {
  if (!notes) notes = JSON.parse(localStorage.getItem('notes'));

  const notesList = document.querySelector('.menu-notes');
  notesList.innerHTML = '';

  if (notes) {
    notes.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.innerHTML = `
      <div class="menu-notes-note" onclick="selectNote(${note.id})">
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
