addEventListener('load', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selected = urlParams.get('selected');

  if (selected) {
    history.replaceState &&
      history.replaceState(
        null,
        '',
        location.pathname +
          location.search.replace(/[\?&]selected=[^&]+/, '').replace(/^&/, '?')
      );
    selectNote(selected);
  }
});

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
  editNote(id);
};

let currentNote = '';
const selectNote = (id = undefined) => {
  const preview = document.querySelector('.preview');
  if (id && currentNote !== id.toString()) {
    const notes = JSON.parse(localStorage.getItem('notes'));
    const note = notes.find((note) => note.id === id.toString());
    const created = new Date(parseInt(note.created)).toLocaleDateString(
      'en-US'
    );
    const modified = new Date(parseInt(note.modified)).toLocaleDateString(
      'en-US'
    );
    currentNote = id.toString();

    preview.classList.remove('hidden');

    preview.innerHTML = `
    <div class="preview-header">
      <div class="preview-header-left">
        <h2 class="preview-header__title">${note.title}</h2>
      </div>
      <div class="preview-header-actions">
        <i class="fa-solid fa-trash preview-header-actions__action" onclick="deleteNote(${
          note.id
        })"></i>
        <i class="fa-solid fa-pen preview-header-actions__action" onclick="editNote(${
          note.id
        })"></i>
        <i class="fa-solid fa-print preview-header-actions__action" onclick="printNote('${
          note.title
        }')"></i>
        <i class="${
          note.favorite ? 'fa-solid fa-star' : 'fa-regular fa-star'
        } preview-header-actions__action" onclick="toggleFavorite(${
      note.id
    })"></i>
      </div>
      <div class="preview-header-right">
        <button class="preview-header__close" onclick="selectNote()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
    <div class="preview-container">
      <div class="preview-dates">
        <h3>Created ${created}</h3>
        <h3>Modified ${modified}</h3>
      </div>
      <div class="preview-viewer"></div>
    </div>
  `;
    const viewer = new toastui.Editor({
      el: document.querySelector('.preview-viewer'),
      initialValue: note.content,
    });
  } else {
    currentNote = '';
    preview.innerHTML = '';
    preview.classList.add('hidden');
  }
};

const deleteNote = (id) => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const noteIndex = notes.findIndex((note) => note.id === id.toString());
  notes.splice(noteIndex, 1);
  localStorage.setItem('notes', JSON.stringify(notes));

  generateNoteList();
  selectNote();
};

const editNote = (id) => {
  window.location.href = `../edit/?id=${id}`;
};

const generateNoteList = (notes = undefined) => {
  if (!notes)
    notes = showFavorites
      ? JSON.parse(localStorage.getItem('notes')).filter(
          (note) => note.favorite
        )
      : JSON.parse(localStorage.getItem('notes'));

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
